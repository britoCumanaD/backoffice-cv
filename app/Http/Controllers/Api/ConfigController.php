<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\CMS\Config;

class ConfigController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        return new JsonResponse(
            Config::all()
                ->keyBy('key')
                ->map(function ($item) {
                    return $item->value;
                })
        );
    }
}
