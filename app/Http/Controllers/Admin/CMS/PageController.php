<?php

namespace App\Http\Controllers\Admin\CMS;

use App\Actions\CMS\Page\PageQueryAction;
use App\Actions\CMS\Page\PageStoreAction;
use App\Actions\CMS\Page\PageUpdateAction;
use App\Http\Controllers\AdminCmsPageController;
use App\Http\Requests\Admin\CMS\Page\PageIndexRequest;
use App\Http\Requests\Admin\CMS\Page\PageStoreRequest;
use App\Http\Requests\Admin\CMS\Page\PageUpdateRequest;
use App\Http\Resources\Admin\CMS\PageResource;
use App\Interfaces\AppInterface;
use App\Interfaces\CMS\TemplateInterface;
use App\Interfaces\CMS\LayoutInterface;
use App\Interfaces\CMS\PageInterface;
use App\Models\CMS\Layout;
use App\Models\CMS\Page;
use App\Models\CMS\Template;
use App\Models\CMS\Url;
use App\Models\CMS\Metadata;
use App\Models\CMS\Content;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends AdminCmsPageController
{
    public function __construct()
    {
        parent::__construct();
        $this->addMetaTitleSection('Pages');
    }

    public function create() : Response
    {
        $this->addMetaTitleSection('Create')->shareMeta();
        return Inertia::render('admin/cms/page/Create', [
            'layouts' => function () {
                return Layout::where('type', LayoutInterface::TYPE_PAGE)->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
            'parentPages' => function() {
                $pages = Page::withOrderedUrl()
                    ->withoutHomeUrl()
                    ->where('type', PageInterface::TYPE_PAGE)
                    ->get();

                PageResource::withoutWrapping();
                return PageResource::collection($pages);
            },
            'templates' => function () {
                return Template::where('type', TemplateInterface::TYPE_PAGE)
                    ->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
        ]);
    }

    public function destroy(Request $request, Page $page) : RedirectResponse
    {

        Url::where('urlable_id', $page->id)->where('urlable_type', 'App\Models\CMS\Page')->delete();
        Content::where('contentable_id', $page->id)->where('contentable_type', 'App\Models\CMS\Page')->delete();
        $page->delete();
        Metadata::where('metadatable_id', $page->id)->where('metadatable_type', 'App\Models\CMS\Page')
        ->delete();

        return Redirect::back(303)->with(
            'success',
            'Page Deleted.'
        );
    }

    public function edit(Page $page) : Response
    {
        $page->load([
            'content',
            'layout',
            'metadata',
            'parent',
            'template',
            'template.templateFields',
            'url',
        ]);

        $this->addMetaTitleSection('Edit - ' . $page->name)->shareMeta();
        return Inertia::render('admin/cms/page/Edit', [
            'layouts'   => function () {
                return Layout::where('type', LayoutInterface::TYPE_PAGE)->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
            'page' => function () use ($page) {
                PageResource::withoutWrapping();
                return PageResource::make($page);
            },
            'parentPages' => function() use ($page) {
                $pages = Page::withOrderedUrl()
                    ->withoutHomeUrl()
                    ->where('type', PageInterface::TYPE_PAGE)
                    ->withoutSelfOrChildUrls($page->url->url_full ?? null)
                    ->get();

                PageResource::withoutWrapping();
                return PageResource::collection($pages);
            },
            'templates' => function () {
                return Template::where('type', TemplateInterface::TYPE_PAGE)
                    ->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
        ]);
    }

    public function index(PageIndexRequest $request) : Response
    {
        $search_options = $request->validated();
        $search_options['with'] = [
            'layout',
            'parent',
            'template',
            'url',
        ];

        $this->shareMeta();
        return Inertia::render('admin/cms/page/Index', [
            'layouts' => function () {
                return Layout::where('type', LayoutInterface::TYPE_PAGE)->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            },
            'pages' => function () use ($search_options) {
                return app(PageQueryAction::class)
                    ->handle($search_options)
                    ->paginate(AppInterface::getSearchPaginationParam($search_options));
            },
            'searchOptions' => $search_options,
            'templates' => function () {
                return Template::where('type', TemplateInterface::TYPE_PAGE)
                    ->orderBy('name', 'asc')
                    ->get()
                    ->keyBy('id');
            }
        ]);
    }

    public function store(PageStoreRequest $request) : RedirectResponse
    {
        $page = app(PageStoreAction::class)->handle($request->validated());
        return Redirect::to(route('admin.cms.pages.edit', $page))
            ->with('success', 'Page Created');
    }

    public function update(PageUpdateRequest $request, Page $page) : RedirectResponse
    {
        $page = app(PageUpdateAction::class)->handle($page, $request->validated());
        return Redirect::to(route('admin.cms.pages.edit', $page))
            ->with('success', 'Page Updated');
    }
}
