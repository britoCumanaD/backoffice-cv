<?php

namespace App\Http\Resources\Admin\Module;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Admin\CMS\LayoutResource;
use App\Http\Resources\Admin\CMS\TemplateResource;
use App\Http\Resources\Admin\CMS\ContentResource;

class ModuleCreatedResource extends JsonResource
{
    public function toArray($request)
    {
        $data = [
            'id'            => $this->id,
            'layout'        => LayoutResource::make($this->whenLoaded('layout')),
            'name'          => $this->name,
            'tableName'     => $this->tableName,
            'template'      => TemplateResource::make($this->whenLoaded('template')),
            'fields'        => $this->fields,
            'relations'        => $this->relations ? json_decode($this->relations) : null
        ];
        
        return $data;
    }
}
