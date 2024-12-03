<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Services\PageService;

class PageController extends Controller
{
    private PageService $pageService;

    public function __construct(PageService $pageService)
    {
        $this->pageService = $pageService;
    }

    public function __invoke(Request $request): JsonResponse
    {
        $pageData = $this->pageService->getPageData($request->slug);

        return response()->json($pageData);
    }
}

