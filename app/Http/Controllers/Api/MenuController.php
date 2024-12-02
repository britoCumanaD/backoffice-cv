<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\CMS\Menu;

class MenuController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $menu = Menu::where('slug', config('api.menu_slug'))->first();

        return new JsonResponse($menu ? $menu->menu_items : []);
    }
}
