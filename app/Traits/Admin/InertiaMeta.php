<?php

namespace App\Traits\Admin;

use Illuminate\Support\Arr;
use Inertia\Inertia;
use App\Models\CMS\Url;

trait InertiaMeta {
    protected $meta_inertia_key = 'meta';
    protected $meta_description = '';
    protected $meta_title_array = [];
    protected $meta_title_show_reversed = true;
    protected $meta_title_separator = " | ";

    protected function addMetaTitleSection(string $section) : self
    {
        $this->meta_title_array[] = $section;
        return $this;
    }

    protected function getMetaArray() : array
    {
        return [
            'description'   => $this->meta_description,
            'title'         => $this->getMetaTitleString(),
        ];
    }

    protected function getMetaTitleString() : string
    {
        if ($this->meta_title_show_reversed) {
            return implode($this->meta_title_separator, array_reverse($this->meta_title_array));
        }
        return implode($this->meta_title_separator, $this->meta_title_array);
    }

    protected function initialiseMeta(array $meta = []) : self
    {
        $this->meta_description = Arr::get($meta, 'description', config('meta.admin.description', ''));

        $title = Arr::get($meta, 'title', config('meta.admin.title', []));
        if (!is_array($title)) {
            $title = explode($this->meta_title_separator, $title);
        }
        $this->meta_title_array = $title;

        return $this;
    }

    protected function setMetaTitle(array $title) : self
    {
        $this->meta_title_array = $title;
        return $this;
    }

    protected function shareMeta()
    {
        Inertia::share(
            $this->meta_inertia_key,
            $this->getMetaArray(),
        );
        Inertia::share(
            'haveBlog',
            $this->checkBlog(),
        );
    }

    protected function checkBlog()
    {
        return Url::where('url_full', env('BLOG_ROOT_DIRECTORY', '/blog'))->where('is_enabled', 1)
        ->first() ? true : false;
    }
}
