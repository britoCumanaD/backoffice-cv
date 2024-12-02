<?php

namespace App\Http\Requests\Admin\Modules;

use App\Http\Requests\BaseIndexRequest;

class ModuleIndexRequest extends BaseIndexRequest
{
    public function rules() : array
    {
        return array_merge(parent::rules(), []);
    }
}
