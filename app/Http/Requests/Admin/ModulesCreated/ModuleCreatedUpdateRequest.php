<?php

namespace App\Http\Requests\Admin\ModulesCreated;

use Illuminate\Validation\Rule;

class ModuleCreatedUpdateRequest extends ModuleCreatedStoreRequest
{

    public function rules() : array
    {
        $rules = parent::rules();

        $rules['id'] = [
            'required',
            'integer'
        ];

        return $rules;
    }
}
