<?php

namespace App\Services;

use App\Models\CMS\Page;
use App\Repositories\ModuleRepository;

class PageService
{
    private ModuleRepository $moduleRepository;

    public function __construct(ModuleRepository $moduleRepository)
    {
        $this->moduleRepository = $moduleRepository;
    }

    public function getPageData(string $slug): array
    {
        $page = $this->getPageQuery($slug)->first();

        if (!$page) {
            return [];
        }

        return $this->mapPageData($page);
    }

    private function getPageQuery(string $slug)
    {
        return Page::select('id', 'name', 'parent_id', 'template_id', 'name', 'slug')
            ->with('template.templateFields', 'content')
            ->whereHas('url', function ($query) {
                $query->where('is_enabled', 1);
            })
            ->where('slug', $slug)
            ->whereNull('parent_id');
    }

    private function mapPageData($page): array
    {
        $mappedData = ['page-name' => $page->name];

        foreach ($page->template->templateFields as $field) {
            $content = $page->content->where('template_field_id', $field->id)->first();

            if ($content) {
                $mappedData[$field->slug] = $this->processFieldContent($field, $content);
            }
        }

        return $mappedData;
    }

    private function processFieldContent($field, $content)
    {
        if ($content->template_field_type === 'module_custom') {
            return $this->moduleRepository->getCustomModuleData($field->settings['customModule']);
        }

        if ($field->type === 'repeater') {
            return $this->mapRepeaterContent($content->data);
        }

        return $content->data;
    }

    private function mapRepeaterContent(string $data): array
    {
        $decodedData = json_decode($data, true);

        if (!$decodedData) {
            return [];
        }

        $dataRepeaterFormat = [];
        foreach ($decodedData as $key => $row) {
            $dataRepeaterFormat[] = [];

            if(count($decodedData) == 1)
                $dataRepeaterFormat = [];
            foreach ($row as $dataBox) {
                if(count($decodedData) == 1)
                    $dataRepeaterFormat[$dataBox['template_field_slug']] = $dataBox['data'];
                else
                    $dataRepeaterFormat[$key][$dataBox['template_field_slug']] = $dataBox['data'];
            }
        }
        return $dataRepeaterFormat;


    }
}
