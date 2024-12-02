<?php

namespace App\Actions\CMS\Layout;

use App\Actions\AbstractQueryAction;
use App\Models\CMS\Layout;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class LayoutQueryAction extends AbstractQueryAction
{
    protected $searchable_fields_equals  = [
        'template_id' => 'template_id',
    ];

    protected $searchable_fields_likes  = [
        'name' => 'layout_name',
        'slug' => 'layout_slug',
    ];

    protected $order_by = 'name';

    protected function addCustomSearchOptions()
    {
        if (Arr::get($this->search_options, 'layout_name'))
            $this->query->where('name', 'LIKE', '%'.Arr::get($this->search_options, 'layout_name').'%');
        if (Arr::get($this->search_options, 'layout_slug'))
            $this->query->where('slug', 'LIKE', '%'.Arr::get($this->search_options, 'layout_slug').'%');
        if (Arr::get($this->search_options, 'template_id'))
            $this->query->where('template_id', Arr::get($this->search_options, 'template_id'));
    }
    
    protected function getQueryBuilder(): Builder
    {
        return Layout::query();
    }

}
