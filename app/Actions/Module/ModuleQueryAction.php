<?php

namespace App\Actions\Module;

use App\Actions\AbstractQueryAction;
use App\Models\Module;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class ModuleQueryAction extends AbstractQueryAction
{
    protected $searchable_fields_likes = [
    ];

    protected $order_by = 'name';


    protected function addOrderOptions()
    {
        $order_by = Arr::get($this->search_options, 'order_by', $this->order_by);
        $order_direction = Arr::get($this->search_options, 'order_direction', $this->order_direction);

        $this->query->orderBy($order_by, $order_direction);
    }

    protected function getQueryBuilder(): Builder
    {
        return Module::query();
    }
}
