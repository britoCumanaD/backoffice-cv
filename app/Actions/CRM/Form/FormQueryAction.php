<?php

namespace App\Actions\CRM\Form;

use App\Actions\AbstractQueryAction;
use App\Models\CRM\Form;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class FormQueryAction extends AbstractQueryAction
{
    protected $searchable_fields_likes = [
        'name' => 'template_name',
        'slug' => 'template_slug',
    ];

    protected $order_by = 'name';

    protected function addCustomSearchOptions()
    {
        if (Arr::get($this->search_options, 'form_name'))
            $this->query->where('name', 'LIKE', '%'.Arr::get($this->search_options, 'form_name').'%');
        if (Arr::get($this->search_options, 'form_slug'))
            $this->query->where('slug', 'LIKE', '%'.Arr::get($this->search_options, 'form_slug').'%');
    }

    protected function getQueryBuilder(): Builder
    {
        return Form::query();
    }
}
