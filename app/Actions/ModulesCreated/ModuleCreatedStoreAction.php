<?php

namespace App\Actions\ModulesCreated;

use Exception;
use App\Models\Module;
use App\Models\ModuleCreated;
use App\Traits\CMS\ManagesContent;

class ModuleCreatedStoreAction
{
    use ManagesContent;

    public function handle(Module $module, array $module_data)
    {

        $this->data = $module_data;

        $content = $this->extractContentFromData();

        try {

            $model = new ModuleCreated();
            $model->setTable($module->tableName);
            foreach ($module_data['fields'] as $item) {
                $model->{$item['columnName']} = is_array($item['data']) ? json_encode($item['data']) : $item['data'];
            }
            if(isset($module_data['relations'])){
                foreach ($module_data['relations'] as $key => $value) {

                    $model->{$key} = $value;
                }
            }
            $model->layout_id   = $module->layout_id;
            $model->template_id = $module->template_id;
            $model->save();
            
            if(!is_null($module->layout_id) || !is_null($module->layout_id))
                $this->storeContent($model, $content);
            return $model;

        } catch (Exception $e) {
            
            return false;
        }

    }
    
}
