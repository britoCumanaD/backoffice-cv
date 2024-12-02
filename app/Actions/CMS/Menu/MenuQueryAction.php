<?php

namespace App\Actions\CMS\Menu;

use App\Actions\AbstractQueryAction;
use App\Models\CMS\Menu;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class MenuQueryAction extends AbstractQueryAction
{
    protected $searchable_fields_likes = [
        'name' => 'menu_name',
        'slug' => 'menu_slug',
    ];

    protected $order_by = 'name';

    protected function addCustomSearchOptions()
    {
        if (Arr::get($this->search_options, 'menu_name'))
            $this->query->where('name', 'LIKE', '%'.Arr::get($this->search_options, 'menu_name').'%');
        if (Arr::get($this->search_options, 'menu_slug'))
            $this->query->where('slug', 'LIKE', '%'.Arr::get($this->search_options, 'menu_slug').'%');
    }

    protected function getQueryBuilder(): Builder
    {
        return Menu::query();
    }
}
