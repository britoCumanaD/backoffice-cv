<?php

use App\Http\Controllers\Api\CMS\PageController;
use App\Http\Controllers\Api\CRM\FormSubmissionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;
use App\Http\Controllers\Api\CreatedModule\CreatedModuleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'client'], function () {
    Route::post('/form-submission/{form}', [FormSubmissionController::class, 'store'])->name('api.form-submission.store');
    Route::get('/form/{form}', [FormSubmissionController::class, 'get'])->name('api.form.get');

    Route::get('/page', [PageController::class, 'show'])->name('api.page');

    // New API routes
    Route::get('/config', Api\ConfigController::class)->name('api.config-get');
    Route::get('/menu', Api\MenuController::class)->name('api.menu-get');

    Route::post('/contact/send', Api\ContactController::class)->name('api.contact-send');

    Route::get('/v1/page-info', Api\PageController::class)->name('api.page-get');

    Route::get('/v1/custom-module/{module}', [CreatedModuleController::class, 'index'])->name('api.custom-module-index');
});
