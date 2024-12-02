<?php

namespace App\Http\Requests\Admin\Modules;

use Illuminate\Validation\Rule;

class ModuleUpdateRequest extends ModuleStoreRequest
{

    public function rules() : array
    {
        $rules = parent::rules();

        $rules['id'] = [
            'required',
            'integer',
            Rule::exists('admin_modules', 'id'),
        ];

        return $rules;
    }
}
