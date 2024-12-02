<?php

namespace App\Http\Controllers\AdminApi\Modules;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Module;
use Illuminate\Support\Facades\DB;

class ModulesAdminController
{
    /**
     * Get a list of files based on the (optional) base directory
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function getActiveModules()
    {
        $modules = Module::select('name', 'tableName', 'icon')->where('status', 1)->get();

        return response()->json($modules);
    }

    public function getColumns(Request $request)
    {

        $columns = DB::select("SELECT *
            FROM information_schema.columns
            WHERE table_name = '".$request->table."' 
            AND TABLE_SCHEMA = '".env('DB_DATABASE')."'");

        $columnsName = [];
        foreach ($columns as $column) {
            $name = $column->{"COLUMN_NAME"};
            if (!in_array($name, ['id', 'created_at', 'updated_at', 'deleted_at'])) {
                $columnsName[$name] = $name;
            }
        }
    
        return response()->json($columnsName);
    }

    public function getModulesToSelect(){

        $modules = Module::select('id', 'name')->pluck('name', 'id');

        return response()->json($modules);
    }

    public function getModule($id)
    {
        $modules = Module::select('name', 'tableName')->where('id', $id)->first();

        return response()->json($modules);
    }
}
