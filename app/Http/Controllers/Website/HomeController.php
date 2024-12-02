<?php

namespace App\Http\Controllers\Website;

use App\Actions\CMS\Page\PageQueryAction;
use App\Http\Controllers\Controller;
use App\Http\Resources\Web\CMS\FullPageResource;
use App\Actions\CMS\Product\ProductQueryAction;
use App\Actions\CMS\ProductCategory\ProductCategoryQueryAction;
use App\Models\CMS\Page;
use App\Interfaces\CMS\PageInterface;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\CMS\Config;

class HomeController extends Controller
{
    /**
     * Show the application homepage.
     *
     * @return Response
     */
    public function index()
    {
        if (!config('tvi.web.enabled')) {
            return redirect(route('admin.index'));
        }
        $configs = [];
        $search_config = Config::get();

        foreach ($search_config as $key => $value) {
            $configs[$value->key] = $value->value;
        }

        $search_options = [
            'page_url'  => '/',
            'with'      => [
                'content',
                'layout',
                'layout.content',
                'layout.content.templateField',
                'metadata',
                'template',
                'url',
            ]
        ];

        $page = app(PageQueryAction::class)
            ->handle($search_options)
            ->first();

            
        if(!$page)
            return Inertia::render('website/home/Index', [
                'config' => $configs,
            ]);
        else{

            if($page->url->is_enabled){
                
                return Inertia::render('website/page/App', [
                    'page' => function () use ($page) {
                        return FullPageResource::make($page);
                    },
                    'config' => $configs,
                    'categories_products' => $this->infoCategoriesProducts(),
                    'feature_products' => $this->infoProductsFeatured($page),
                ]);
            }else{
                return Inertia::render('website/home/Index');
            }
        }
    }

    public function infoCategoriesProducts(){
        
        return Page::select('id', 'name', 'slug', 'type')
            ->where('type', PageInterface::TYPE_PRODUCT_CATEGORY)
            ->whereNull('parent_id')
            ->with('urlOnly', 'content.templateField')
            ->whereHas('urlOnly', function ($query) {
                $query->where('is_enabled', 1);
            })->get()->toArray();

    }

    public function infoProductsFeatured($page){

        return Page::select('id', 'name', 'slug', 'type', 'parent_id')
            ->where('id', '!=', $page->id)
            ->where('type', PageInterface::TYPE_PRODUCT)
            ->with('urlOnly', 'content.templateField', 'parentName.urlOnly')
            ->whereHas('urlOnly', function ($query) {
                $query->where('is_enabled', 1);
            })->whereHas('content', function ($query) {
                $query->where('template_field_id', 263)->where('data', '!=', '');
            })->inRandomOrder()->limit(4)->get()
            ->toArray();
    }

}