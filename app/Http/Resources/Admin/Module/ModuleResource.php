<?php

namespace App\Http\Resources\Admin\Module;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Admin\CMS\LayoutResource;
use App\Http\Resources\Admin\CMS\TemplateResource;

class ModuleResource extends JsonResource
{
    public function toArray($request)
    {
        $data = [
            'id'            => $this->id,
            'layout'        => LayoutResource::make($this->whenLoaded('layout')),
            'layout_id'     => $this->layout_id,
            'name'          => $this->name,
            'tableName'     => $this->tableName,
            'template'      => TemplateResource::make($this->whenLoaded('template')),
            'template_id'   => $this->template_id,
            'relations'     => $this->relations,
            'status'        => $this->status,
            'icon'          => $this->icon,
            'fields'        => $this->fields
        ];

        return $data;
    }
}
