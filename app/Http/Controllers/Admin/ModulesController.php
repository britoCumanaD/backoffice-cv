<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminCMSAdvancedController;
use App\Interfaces\PermissionInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Module;
use App\Http\Requests\Admin\Modules\ModuleIndexRequest;
use App\Http\Requests\Admin\Modules\ModuleStoreRequest;
use App\Http\Requests\Admin\Modules\ModuleUpdateRequest;
use App\Actions\Module\ModuleQueryAction;
use App\Actions\Module\ModuleStoreAction;
use App\Actions\Module\ModuleUpdateAction;
use App\Interfaces\CMS\LayoutInterface;
use App\Models\CMS\Layout;
use App\Interfaces\CMS\TemplateInterface;
use App\Models\CMS\Template;
use App\Interfaces\CMS\TemplateFieldInterface;
use App\Http\Resources\Admin\Module\ModuleResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;

class ModulesController extends AdminCMSAdvancedController
{
    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('Modules');
    }

    public function listsIcons () {

        $directory = resource_path('js/components/core/icons');
        $files = File::allFiles($directory);
        $icons = [];
        foreach ($files as $file) {
            $name = str_replace(".vue", "", $file->getFilename());
            $icons[] = $name;
        }
        return $icons;
        
    }

    public function fieldTypes(){
        return [
            'string'    => 'String',
            'integer'   => 'Integer',
            'text'      => 'Text',
            'json'      => 'Json',
            'date'      => 'Date',
            'time'      => 'Time',
            'dateTime'  => 'DateTime'
        ];
    }

    public function getListTables(){

        $tables = DB::select('SHOW TABLES');
        $tablesName = [];
        foreach ($tables as $table) {
            $name = $table->{"Tables_in_".env('DB_DATABASE')};
            $tablesName[$name] = $name;
        }

        return $tablesName;
    }
    
    public function create()
    {
        $this->addMetaTitleSection('Create')->shareMeta();

        return Inertia::render('admin/module/Create', [
            'layouts' => function () {
                return Layout::where('type', LayoutInterface::TYPE_MODULE)->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
            'templates' => function () {
                return Template::where('type', TemplateInterface::TYPE_MODULE)->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
            'fieldSettings' => [
                'string'    => [],
                'integer'   => [],
                'text'      => [],
                'boolean'   => [],
                'json'      => [],
            ],
            'fieldTypes' => $this->fieldTypes(),
            'currentTables' => $this->getListTables(),
            'relationTypes' => [
                'one_to_many'    => 'One To Many',
                //'many_to_one'    => 'Many To One',
                'one_to_one'    => 'One To One',
                //'many_to_many'    => 'Many To Many',
            ],
            'listsIcons' => $this->listsIcons(),
            'inputSettings' => function () {
                return TemplateFieldInterface::SETTINGS;
            },
            'inputTypes' => function () {
                return TemplateFieldInterface::ALL_TYPES_MODULES;
            }
        ]);
    }

    public function destroy(Module $module)
    {
        Schema::dropIfExists($module->tableName);
        $module->delete();

        return Redirect::back(303)->with(
            'success',
            'Module deleted.'
        );
    }

    public function edit(Module $module)
    {
        $this->addMetaTitleSection('Edit');
        $this->shareMeta();

        return Inertia::render('admin/module/Edit', [
            'module' => function () use ($module) {
                ModuleResource::withoutWrapping();
                return ModuleResource::make($module);
            },
            'layouts' => function () {
                return Layout::where('type', LayoutInterface::TYPE_MODULE)->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
            'templates' => function () {
                return Template::where('type', TemplateInterface::TYPE_MODULE)->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
            'fieldSettings' => [
                'string'    => [],
                'integer'   => [],
                'text'      => [],
                'boolean'   => [],
                'json'      => [],
            ],
            'fieldTypes' => $this->fieldTypes(),
            'currentTables' => $this->getListTables(),
            'relationTypes' => [
                'one_to_many'    => 'One To Many',
                'one_to_one'    => 'One To One',
            ],
            'listsIcons' => $this->listsIcons(),
            'inputSettings' => function () {
                return TemplateFieldInterface::SETTINGS;
            },
            'inputTypes' => function () {
                return TemplateFieldInterface::ALL_TYPES_MODULES;
            }
        ]);
    }

    public function index(ModuleIndexRequest $request)
    {
        $search_options = $request->validated();

        $this->shareMeta();
        return Inertia::render('admin/module/Index', [
            'modules' => function () use ($search_options) {
                return app(ModuleQueryAction::class)->handle($search_options)->paginate();
            }
        ]);
    }

    public function store(ModuleStoreRequest $request)
    {
        $module = app(ModuleStoreAction::class)->handle($request->validated());
        return Redirect::to(route('admin.modules.edit', $module))
            ->with('success', 'Module created.');
    }

    public function update(ModuleUpdateRequest $request, Module $module)
    {
        app(ModuleUpdateAction::class)->handle($module, $request->validated());
        return Redirect::to(route('admin.modules.edit', $module))
            ->with('success', 'Module updated.');
    }
}
