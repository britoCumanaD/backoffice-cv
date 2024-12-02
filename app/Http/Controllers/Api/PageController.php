<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\CMS\Page;
use App\Models\Module;
use App\Models\ModuleCreated;

class PageController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $page = $this->getQueryPage($request->name)->first();

        return new JsonResponse(
            $this->mapRowsPage($page)
        );
    }

    public function getQueryPage($name)
    {
        return Page::select('id', 'name', 'parent_id', 'template_id', 'name', 'slug')
            ->with('template.templateFields', 'content')
            ->where('type', config('api.type.page'))
            ->whereHas('url', function ($query) {
                $query->where('is_enabled', 1);
            })
            ->where('slug', $name)
            ->whereNull('parent_id');
    }

    public function mapRowsPage($data)
    {
        if (!$data) return [];
        $dataFormat = [];

        $dataFormat['page-name'] = $data->name;

        foreach ($data->template->templateFields as $field) {
            
            if ($content = $data->content->where('template_field_id', $field->id)->first()) {
                if($content->template_field_type == 'module_custom'){

                    $customModule = Module::select('tableName')->where('id', $field->settings['customModule'])->first();
                    $model = new ModuleCreated();
                    $model->setTable($customModule->tableName);

                    $haveAll = isset($params['all']) ? $params['all'] : 1;

                    $dataFormat[$customModule->tableName] = $haveAll
                            ? $model->get()
                        : $model->paginate($params['per_page'] ?? 10, ['*'], 'page', $params['page'] ?? 1);
                }
                else{
                    $info = $content->data;
                    if($field->type == 'repeater'){
                        $dataRepeater = json_decode($content->data);
                        $dataRepeaterFormat = [];
                        foreach ($dataRepeater as $key => $row) {
                            $dataRepeaterFormat[] = [];
                            foreach ($row as $dataBox) {
                                $dataRepeaterFormat[$key][$dataBox->template_field_slug] = $dataBox->data;
                            }
                        }
                        $info = $dataRepeaterFormat;
                    }
                    $dataFormat[$field->slug] = $info;
                }

                
            }
        }

        return $dataFormat;
    }
}
