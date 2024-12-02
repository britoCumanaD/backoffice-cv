<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Module;
use App\Http\Requests\Admin\ModulesCreated\ModuleCreatedStoreRequest;
use App\Http\Requests\Admin\ModulesCreated\ModuleCreatedUpdateRequest;
use App\Actions\ModulesCreated\ModuleCreatedUpdateAction;
use App\Actions\ModulesCreated\ModuleCreatedStoreAction;
use App\Interfaces\CMS\LayoutInterface;
use App\Models\CMS\Layout;
use App\Interfaces\CMS\TemplateInterface;
use App\Models\CMS\Template;
use App\Http\Resources\Admin\Module\ModuleCreatedResource;
use App\Http\Resources\Admin\Module\RegistryResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ModuleCreated;

use function PHPUnit\Framework\isNull;

class ModulesCreatedController extends AdminController
{
    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('Modules');
    }

    public function getRelationsSelect($relations){

        $current_relations = [];
        if($relations){
            $relations = json_decode($relations);
            foreach ($relations as $relation) {

                $table = $relation->{'table'};
                $column = $relation->{'column'};
                $data = DB::select("SELECT id, {$column} from {$table}");
                
                $data_select = [];
        
                foreach ($data as $value) {
                    $data_select[$value->{'id'}] = $value->{$column};
                }

                $current_relations[$table] = $data_select;
            }
        }
        return $current_relations;
    }
    
    public function create(Request $request)
    {
        $module = Module::where('tableName', $request['module'])->where('status', 1)
            ->with('template.templateFields', 'layout.template.templateFields')
            ->first();

        if(is_null($module)){
            return Redirect::back(303);
        }


        $this->addMetaTitleSection('Create')->shareMeta();
        return Inertia::render('admin/modulesCreated/Create', [
            'current_module' => function () use ($module) {
                
                ModuleCreatedResource::withoutWrapping();
                return ModuleCreatedResource::make($module);
            },
            'relations' => $this->getRelationsSelect($module->relations)
        ]);
    }

    public function destroy($module, $registry)
    {
        $module = Module::where('id', $module)->where('status', 1)
            ->with('template.templateFields', 'layout.template.templateFields')
            ->first();
        if(is_null($module)){
            return Redirect::back(303);
        }

        $model = new ModuleCreated();
        $model->setTable($module->tableName);
        $model = $model->find($registry);
        $model->delete();

        return Redirect::back(303)->with(
            'success',
            'Module deleted.'
        );
    }

    public function edit($module, $registry)
    {
        $this->addMetaTitleSection('Edit');
        $this->shareMeta();
        $module = Module::where('id', $module)->where('status', 1)
            ->with('template.templateFields', 'layout.template.templateFields')
            ->first();
        if(is_null($module)){
            return Redirect::back(303);
        }
        $model = new ModuleCreated();
        $model->setTable($module->tableName);
        $model = $model->where('id', $registry)->first();
        $model->fields = $module->fields;
        $relations = json_decode($module->relations);

        return Inertia::render('admin/modulesCreated/Edit', [
            'current_module' => function () use ($module) {
                ModuleCreatedResource::withoutWrapping();
                return ModuleCreatedResource::make($module);
            },
            'registry' => function () use ($model, $relations)  {
                $test = new RegistryResource ($model);
                
                return $test->addRelations($test, $relations);
            },
            'relations' => $this->getRelationsSelect($module->relations)
        ]);
    }

    public function index(Request $request)
    {
        $search_options = $request->all();
        $module = Module::where('tableName', $request['module'])->where('status', 1)->first();
        if(is_null($module)){
            return Redirect::back(303);
        }

        $model = new ModuleCreated();
        $model->setTable($module->tableName);
        
        $this->shareMeta();
        return Inertia::render('admin/modulesCreated/Index', [
            'rows' => $model->paginate($request->get('per_page') ?? 10, ['*'], 'page', $request->get('page') ?? 1),
            'current_module' => [
                'id' => $module->id,
                'name' => $module->name,
                'tableName' => $module->tableName,
                'template' => $module->template,
                'layout' => $module->layout,
                'fields' => $module->fields,
            ],
            'searchOptions' => $search_options,
            'layouts' => function () {
                return Layout::where('type', LayoutInterface::TYPE_MODULE)->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
            'templates' => function () {
                return Template::where('type', TemplateInterface::TYPE_MODULE)
                    ->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
        ]);
    }

    public function store(ModuleCreatedStoreRequest $request, Module $module)
    {
        $registry = app(ModuleCreatedStoreAction::class)->handle($module, $request->validated());
        return Redirect::to(route('admin.module_created.get.edit', [$module->id, $registry->id]))
            ->with('success', 'Created.');
    }

    public function update(ModuleCreatedUpdateRequest $request, $module)
    {
        $module = Module::where('id', $module)->where('status', 1)
            ->with('template.templateFields', 'layout.template.templateFields')
            ->first();
        if(is_null($module)){
            return Redirect::back(303);
        }
        
        $registry = app(ModuleCreatedUpdateAction::class)->handle($module, $request->validated());
        return Redirect::to(route('admin.module_created.get.edit', [$module->id, $registry->id]))
            ->with('success', 'Updated.');
    }
}
