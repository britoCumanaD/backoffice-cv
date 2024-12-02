<?php

namespace App\Actions\CMS\Template;

use App\Actions\AbstractQueryAction;
use App\Models\CMS\Template;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class TemplateQueryAction extends AbstractQueryAction
{
    protected $searchable_fields_equals = [
        'type' => 'template_type',
    ];

    protected $searchable_fields_likes = [
        'name' => 'template_name',
        'slug' => 'template_slug',
    ];

    protected $order_by = 'name';

    protected function addCustomSearchOptions()
    {
        if (Arr::get($this->search_options, 'template_name'))
            $this->query->where('name', 'LIKE', '%'.Arr::get($this->search_options, 'template_name').'%');
        if (Arr::get($this->search_options, 'template_slug'))
            $this->query->where('slug', 'LIKE', '%'.Arr::get($this->search_options, 'template_slug').'%');
        if (Arr::get($this->search_options, 'template_type'))
            $this->query->where('type', Arr::get($this->search_options, 'template_type'));
    }

    protected function getQueryBuilder(): Builder
    {
        return Template::query();
    }
}
