<?php

namespace App\Actions\ModulesCreated;

use Exception;
use App\Models\Module;
use App\Models\ModuleCreated;
use App\Traits\CMS\ManagesContent;

class ModuleCreatedUpdateAction
{
    use ManagesContent;

    public function handle(Module $module, array $module_data) //: Module
    {

        $this->data = $module_data;
        $content = $this->extractContentFromData();

        $model = new ModuleCreated();
        $model->setTable($module->tableName);
        $model = $model->find($this->data['id']);
        
        if(isset($module_data['relations'])){
            foreach ($module_data['relations'] as $key => $value) {
                $model->{$key} = $value;
            }
        }
        foreach ($module_data['fields'] as $item) {
            $model->{$item['columnName']} = $item['data'];
        }
        $model->save();
        
        if(!is_null($module->layout_id) || !is_null($module->layout_id))
            $this->updateContent($model, $content);
        return $model;

    }
}
