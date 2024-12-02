<?php

namespace App\Actions\Module;

use Exception;
use App\Models\Module;
use App\Models\ModulesFields;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;

class ModuleStoreAction
{
    public function handle(array $module_data) : Module
    {
        
        try {
            $newModule = Module::create([
                'name'          => $module_data['name'],
                'tableName'     => $module_data['tableName'],
                'layout_id'     => $module_data['layout_id'],
                'template_id'   => $module_data['template_id'],
                'relations'     => json_encode($module_data['relations']),
                'status'        => $module_data['status'],
                'icon'        => $module_data['icon'],
            ]);

            foreach ($module_data['fields'] as $key => $field) {
                ModulesFields::create([
                    'admin_module_id'    => $newModule->id,
                    'name'               => $field['name'],
                    'columnName'         => $field['columnName'],
                    'type'               => $field['type'],
                    'order'              => $field['order'],
                    'field_type'         => $field['inputType'],
                    'field_type_setting' => json_encode($field['inputSettings']),
                    'is_required'        => $field['is_required']
                ]);
            }
        
            DB::table('migrations')->where('migration', '2023_08_28_220231_update_modules_admin')->delete();
            Artisan::call('migrate');

            return $newModule;

        } catch (Exception $e) {
            
            return false;
        }

    }
    
}
