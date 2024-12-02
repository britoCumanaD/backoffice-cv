<?php

namespace App\Http\Resources\Admin\Module;

use Illuminate\Http\Resources\Json\JsonResource;

class ModulesFieldsResource extends JsonResource
{

    public $preserveKeys = true;

    public function toArray($request)
    {

        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'type'          => $this->type,
            'order'          => $this->order,
            'inputType'     => $this->field_type,
            'inputSettings' => json_decode($this->field_type_setting),
            'is_required'   => $this->is_required
        ];
    }
}
