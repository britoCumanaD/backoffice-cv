<?php

namespace App\Http\Requests\Admin\ModulesCreated;

use App\Http\Requests\BaseIndexRequest;

class ModuleCreatedIndexRequest extends BaseIndexRequest
{
    public function rules() : array
    {
        return array_merge(parent::rules(), [
            'module' => 'nullable'
        ]);
    }
}