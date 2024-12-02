<?php

namespace App\Http\Requests\Admin\Modules;

use App\Http\Requests\BaseRequest;
use App\Interfaces\CMS\TemplateInterface;
use Illuminate\Validation\Rule;

class ModuleStoreRequest extends BaseRequest
{

    public function rules() : array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:255',
            ],
            'tableName' => [
                'required',
                'string',
                'max:60',
            ],
            'layout_id' => [
                'nullable',
                'integer',
                Rule::exists('cms_layouts', 'id'),
            ],
            'template_id' => [
                'nullable',
                'integer',
                Rule::exists('cms_templates', 'id')->where(function ($query) {
                    $query->where('type', TemplateInterface::TYPE_MODULE);
                }),
            ],
            'fields' => [
                'nullable',
                'array',
            ],
            'fields.*.columnName'         => 'required|string|max:60',
            'fields.*.name'         => 'required|string|max:250',
            'fields.*.type'         => 'required|string|max:250',
            'fields.*.order'         => 'nullable',
            'fields.*.inputType'         => 'required|string|max:250',
            'fields.*.inputSettings'         => 'nullable',
            'fields.*.is_required'         => 'nullable',
            'relations' => [
                'nullable',
                'array',
            ],
            'icon' => [
                'required',
                'string',
                'max:255',
            ],
            'status' => [
                'nullable',
                'boolean',
            ],
        ];
    }
}
