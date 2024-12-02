<?php

use App\Http\Controllers\Admin\CMS\LayoutController;
use App\Http\Controllers\Admin\CMS\MenuController;
use App\Http\Controllers\Admin\CMS\PageController;
use App\Http\Controllers\Admin\CMS\TemplateController;
use App\Http\Controllers\Admin\CRM\ContactController;
use App\Http\Controllers\Admin\CRM\FormController;
use App\Http\Controllers\Admin\CMS\ConfigController;
use App\Http\Controllers\Admin\CRM\FormSubmissionController;
use App\Http\Controllers\Admin\FileManagerController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ModulesController;
use App\Http\Controllers\Admin\ModulesCreatedController;
/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [HomeController::class, 'index'])->name('index');

Route::resource('modules', ModulesController::class);  

Route::group([
    'as' => 'cms.',
    'prefix' => 'cms'
], function() {
    Route::resource('layouts', LayoutController::class);
    Route::resource('menus', MenuController::class);
    Route::resource('pages', PageController::class);
    Route::resource('templates', TemplateController::class);
    Route::resource('config', ConfigController::class);
});

Route::group([
    'as' => 'crm.',
    'prefix' => 'crm'
], function() {
    Route::resource('contacts', ContactController::class);
    Route::resource('form-submissions', FormSubmissionController::class)->only([
        'index', 'show'
    ]);
    Route::resource('forms', FormController::class);
});

Route::get('/file-manager', [FileManagerController::class, 'index'])
    ->name('file_manager.index')
    ->middleware(['can:view file_manager']);

Route::group([
    'as' => 'profile.',
    'prefix' => 'profile'
], function() {
    Route::get('/', [ProfileController::class, 'index'])->name('index');
    Route::get('/edit', [ProfileController::class, 'edit'])->name('edit');
    Route::put('/', [ProfileController::class, 'update'])->name('update');
});

Route::resource('users', UserController::class);

Route::resource('module_created', ModulesCreatedController::class);
Route::get('module_created/edit/{module}/{registry}', [ModulesCreatedController::class, 'edit'])->name('module_created.get.edit');
Route::post('module_created/save/{module}', [ModulesCreatedController::class, 'store'])->name('module_created.save');
Route::delete('module_created/delete/{module}/{registry}', [ModulesCreatedController::class, 'destroy'])->name('module_created.delete');

/** Fallback admin route - ensures Auth() calls work as expected in the exception handler */
Route::fallback(function () {
    abort(404);
});
