<?php

namespace App\Http\Requests\Admin\ModulesCreated;

use App\Http\Requests\BaseRequest;
use App\Interfaces\CMS\CMSInterface;
use App\Interfaces\CMS\TemplateInterface;
use App\Interfaces\CMS\PageInterface;
use Illuminate\Validation\Rule;

class ModuleCreatedStoreRequest extends BaseRequest
{
    public function attributes() : array
    {
        $custom_attributes = [
            'id' => 'id',
            'content.*.template_field_id'   => 'template field',
            'fields.*'   => 'template field',
            'relations.*'   => 'Relations field',
        ];

        return array_merge(parent::attributes(), $custom_attributes);
    }

    public function rules() : array
    {
        return [
            'id'                => 'required',
            'content.*'    => 'nullable',
            'fields.*'          => 'nullable',
            'relations.*'          => 'nullable',
        ];
    }
}
