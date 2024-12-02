<?php

namespace App\Http\Resources\Admin\Module;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Admin\CMS\LayoutResource;
use App\Http\Resources\Admin\CMS\TemplateResource;
use App\Http\Resources\Admin\CMS\ContentResource;

class RegistryResource extends JsonResource
{   

    public function toArray($request)
    {
        
        $data = [
            'id'            => $this->id,
        ];

        return $data;
    }

    public function addRelations($request, $relations)
    {
        $data = [
            'id'            => $this->id,
        ];
        foreach ($relations as $key => $relation) {
            $data[$relation->{'name'}] = $this->{$relation->{'name'}};
        }

        foreach ($this->resource->fields as $key => $field) {
            $data[$field->columnName] = $field->type == 'json' ? json_decode($this->{$field->columnName}) : $this->{$field->columnName};
        }
        
        // Add content, keyed via template field id
        if ($this->content) {
            $content = ContentResource::collection($this->content);
            $data['content'] = $content->keyBy('template_field_id');
        }
        
        return $data;
    }
}
