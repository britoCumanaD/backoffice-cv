<?php

namespace App\Actions\CMS\Page;

use App\Actions\AbstractQueryAction;
use App\Models\CMS\Page;
use App\Models\CMS\Url;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use App\Interfaces\CMS\PageInterface;

class PageQueryAction extends AbstractQueryAction
{
    protected $searchable_fields_equals = [
        'layout_id'     => 'layout_id',
        'page_id'       => 'page_id',
        'template_id'   => 'template_id',
    ];

    protected $searchable_fields_likes = [
        'name' => 'page_name',
        'slug' => 'page_slug',
    ];

    protected $order_by = 'url_full';

    protected function addCustomSearchOptions()
    {
        $this->query->where('type', PageInterface::TYPE_PAGE);
        if (Arr::get($this->search_options, 'page_url')) {
            $this->query->whereHas('url', function ($query) {
                $url = Arr::get($this->search_options, 'page_url');
                if (!Str::startsWith($url, '/')) {
                    $url = '/' . $url;
                }

                $query->where('url_full', $url);
            });
        }
        if (Arr::get($this->search_options, 'page_name'))
            $this->query->where('name', 'LIKE', '%'.Arr::get($this->search_options, 'page_name').'%');
        if (Arr::get($this->search_options, 'page_slug'))
            $this->query->where('slug', 'LIKE', '%'.Arr::get($this->search_options, 'page_slug').'%');
        if (Arr::get($this->search_options, 'layout_id'))
            $this->query->where('layout_id', Arr::get($this->search_options, 'layout_id'));
        if (Arr::get($this->search_options, 'template_id')) 
            $this->query->where('template_id', Arr::get($this->search_options, 'template_id'));
    }

    protected function addOrderOptions()
    {
        $order_by = Arr::get($this->search_options, 'order_by', $this->order_by);
        $order_direction = Arr::get($this->search_options, 'order_direction', $this->order_direction);

        if ($order_by === 'url_full') {
            $ordered_ids = Url::where('urlable_type', '=', Page::class)
                ->orderBy('url_full',  $order_direction)
                ->pluck('urlable_id')
                ->implode(',');

            $this->query->orderByRaw('FIELD (id, ' . $ordered_ids . ')');
        } else {
            $this->query->orderBy($order_by, $order_direction);
        }
    }


    protected function getQueryBuilder(): Builder
    {
        return Page::query();
    }
}
