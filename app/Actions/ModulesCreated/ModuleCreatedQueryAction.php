<?php

namespace App\Actions\ModulesCreated;

use App\Actions\AbstractQueryAction;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use App\Models\ModuleCreated;

class ModuleCreatedQueryAction extends AbstractQueryAction
{
    protected $searchable_fields_likes = [
    ];

    protected $order_by = 'name';


    protected function addOrderOptions()
    {
        //$order_by = Arr::get($this->search_options, 'order_by', $this->order_by);
        //$order_direction = Arr::get($this->search_options, 'order_direction', $this->order_direction);

        $this->query;
    }

    protected function getQueryBuilder(): Builder
    {
        $model = new ModuleCreated();
        $model->setTable($this->search_options['module']);
        
        return $model::query();
    }
}
