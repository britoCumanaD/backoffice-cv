<?php

namespace App\Http\Controllers\Website;

use App\Actions\CMS\Page\PageQueryAction;
use App\Actions\CMS\Post\PostQueryAction;
use App\Actions\CMS\Category\CategoryQueryAction;
use App\Actions\CMS\Product\ProductQueryAction;
use App\Actions\CMS\ProductCategory\ProductCategoryQueryAction;
use App\Http\Controllers\Controller;
use App\Http\Resources\Web\CMS\FullPageResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\CMS\Page;
use App\Models\CMS\Config;
use App\Interfaces\CMS\PageInterface;

class PageController extends Controller
{
    public function show(Request $request): Response
    {
        if (!config('tvi.web.enabled')) {
            abort(404);
        }
        $search_options = [
            'page_url'  => $request->getPathInfo(),
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

        return $this->getInfoPage($request, $search_options);

    }

    public function getInfoPage(Request $request, $search_options){

        $page = app(PageQueryAction::class)
            ->handle($search_options)
            ->first();
        if(!$page){   
            $page = app(PostQueryAction::class)
            ->handle($search_options)
            ->first();
        }
        if(!$page){   
            $page = app(CategoryQueryAction::class)
            ->handle($search_options)
            ->first();
        }
        if(!$page){   
            $page = app(ProductQueryAction::class)
            ->handle($search_options)
            ->first();
        }
        if(!$page){   
            $page = app(ProductCategoryQueryAction::class)
            ->handle($search_options)
            ->first();
        }

        if(isset($page->url) && $page->url->is_enabled){

            $configs = [];
            $search_config = Config::get();
    
            foreach ($search_config as $key => $value) {
                $configs[$value->key] = $value->value;
            }

            $array = [
                'page' => function () use ($page) {
                    return FullPageResource::make($page);
                },
                'config' => $configs,
            ];
            if(
                str_contains($request->getPathInfo(), env('BLOG_ROOT_DIRECTORY')) || 
                $page->type === PageInterface::TYPE_CATEGORY
            ){
                $array = $this->infoPost($array, $request->all(), $page);
                $array = $this->infoCategories($array);
            }
            if(
                str_contains($request->getPathInfo(), env('MENU_ROOT_DIRECTORY')) || 
                $page->type === PageInterface::TYPE_PRODUCT_CATEGORY
            )
                $array = $this->infoCategoriesProducts($array);
            
            if($page->type === PageInterface::TYPE_PRODUCT_CATEGORY)
                $array = $this->infoProducts($array, $page);

            if($page->type === PageInterface::TYPE_POST){
                $array = $this->infoPostFeatured($array, $page);
            }

            return Inertia::render('website/page/App', $array);
        }else {
            return Inertia::render('website/page/App', [
                'page' => [
                    'data' => [
                        'metadata' => [
                            'title' => 'Page not Found',
                            'description' => null,
                            'og_description' => null,
                            'og:image' => null,
                            'og:title' => null,
                            'og:type' => null,
                            'og:url' => null,
                        ],
                        'content' => null,
                        'layout' => [
                            'slug' => 'empty'
                        ],
                        'template' => [
                            'slug' => 'default-template'
                        ]
                    ]
                ],
            ]);
        }
    }

    public function infoPost($array, $params, $page){
        
        $pageCurrent = isset($params['page']) ? $params['page'] : 1;
        $per_page = isset($params['per_page']) ? $params['per_page'] : 9;

        $getPost = Page::select('id', 'name', 'slug', 'type', 'parent_id')
        ->where('type', PageInterface::TYPE_POST)
        ->with('urlOnly', 'content.templateField', 'parentName.urlOnly')
        ->whereHas('urlOnly', function ($query) {
            $query->where('is_enabled', 1);
        })
        ->where(function($query){
            $query->whereHas('parentName.urlOnly', function ($query) {
                $query->where('is_enabled', 1);
            })->orWhereNull('parent_id');
        });
        if($page->type==PageInterface::TYPE_CATEGORY){
            $per_page = 6;
            $getPost = $getPost->where('parent_id', $page->id);
        }

        $posts = [
            'posts' => $getPost = $getPost->paginate($per_page, ['*'], 'page', $pageCurrent)
            ->toArray()
        ];

        if(count($posts)>0)
            $array = array_merge($array, $posts);

        return $array;
    }

    public function infoCategories($array){
        
        $categories = [
            'categories' => Page::select('id', 'name', 'slug', 'type')
            ->where('type', PageInterface::TYPE_CATEGORY)
            ->whereNull('parent_id')
            ->with('urlOnly')
            ->whereHas('urlOnly', function ($query) {
                $query->where('is_enabled', 1);
            })->get()->toArray()
        ];

        if(count($categories)>0)
            $array = array_merge($array, $categories);

        return $array;
    }

    public function infoPostFeatured($array, $page){

        $featured = [
            'featured' => Page::select('id', 'name', 'slug', 'type')
            ->where('id', '!=', $page->id)
            ->where('type', PageInterface::TYPE_POST)
            ->whereNull('parent_id')
            ->with('urlOnly', 'content.templateField', 'parentName.urlOnly')
            ->whereHas('urlOnly', function ($query) {
                $query->where('is_enabled', 1);
            })->inRandomOrder()->limit(3)->get()
            ->toArray()
        ];

        if(count($featured)>0)
            $array = array_merge($array, $featured);

        return $array;

    }

    public function infoCategoriesProducts($array){
        
        $categories_products = [
            'categories_products' => Page::select('id', 'name', 'slug', 'type')
            ->where('type', PageInterface::TYPE_PRODUCT_CATEGORY)
            ->whereNull('parent_id')
            ->with('urlOnly', 'content.templateField')
            ->whereHas('urlOnly', function ($query) {
                $query->where('is_enabled', 1);
            })->get()->toArray()
        ];

        if(count($categories_products)>0)
            $array = array_merge($array, $categories_products);

        return $array;

    }

    public function infoProducts($array, $page){
        
        $products = [
            'products' => Page::select('id', 'name', 'slug', 'type', 'parent_id')
            ->where('type', PageInterface::TYPE_PRODUCT)
            ->where('parent_id', $page->id)
            ->with('content.templateField')
            ->whereHas('urlOnly', function ($query) {
                $query->where('is_enabled', 1);
            })->get()->toArray()
        ];

        if(count($products)>0)
            $array = array_merge($array, $products);

        return $array;
    }
}
