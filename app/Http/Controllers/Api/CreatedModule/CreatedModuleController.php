<?php

namespace App\Http\Controllers\Api\CreatedModule;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Module;
use App\Models\ModuleCreated;

class CreatedModuleController extends Controller
{
    public function index(Module $module, Request $request): JsonResponse
    {
        $data = [];
        if(!is_null($module)){
            
            $model = new ModuleCreated();
            $model->setTable($module->tableName);

            $haveAll = !is_null($request->get('all')) && $request->get('all') == 'true';

            $data = $haveAll
                    ? $model->get()
                    : $model->paginate($request->get('per_page') ?? 10, ['*'], 'page', $request->get('page') ?? 1);
        }

        return response()->json($data);
    }

}
