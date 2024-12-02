<?php

namespace App\Actions\Module;

use App\Models\Module;
use App\Models\ModulesFields;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;

class ModuleUpdateAction
{
    public function handle(Module $module, array $module_data, bool $refresh = false) : Module
    {

        $module->update([
            'name'          => $module_data['name'],
            'layout_id'     => $module_data['layout_id'],
            'template_id'   => $module_data['template_id'],
            'relations'     => json_encode($module_data['relations']),
            'status'        => $module_data['status'],
            'icon'        => $module_data['icon'],
        ]);

        foreach ($module_data['fields'] as $key => $field) {

            $condition = isset($field['id']) ? [ 'id' => $field['id']] : ['admin_module_id'=> $module->id, 'name' => $field['name']];

            ModulesFields::updateOrCreate(
                $condition,[
                'name'              => $field['name'],
                'columnName'        => $field['columnName'],
                'type'              => $field['type'],
                'field_type'        => $field['inputType'],
                'field_type_setting'=> json_encode($field['inputSettings']),
                'order'             => $field['order'],
                'is_required'       => $field['is_required']
            ]);
        }

        $fildsUse = array_column($module_data['fields'], 'name');
        ModulesFields::where('admin_module_id', $module->id)->whereNotIn('name', $fildsUse)->delete();

        DB::table('migrations')->where('migration', '2023_08_28_220231_update_modules_admin')->delete();
        Artisan::call('migrate');

        if ($refresh) {
            $module->refresh();
        }

        return $module;
    }
}
