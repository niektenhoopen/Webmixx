<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use SjorsvanLeeuwen\Webmixx\Http\Controllers\Api\PageController as ApiPageController;
use SjorsvanLeeuwen\Webmixx\Http\Controllers\Api\PageTemplateController as ApiPageTemplateController;
use SjorsvanLeeuwen\Webmixx\Http\Controllers\FrontController;
use SjorsvanLeeuwen\Webmixx\Http\Controllers\PageAttributeTemplateController;
use SjorsvanLeeuwen\Webmixx\Http\Controllers\PageController;
use SjorsvanLeeuwen\Webmixx\Http\Controllers\PageTemplateController;

Route::group([
    'prefix' => 'webmixx',
    'as' => 'webmixx.',
    'middleware' => [
        'web',
        'auth',
    ],
], function (): void {
    Route::view('dashboard', 'webmixx::dashboard')->name('dashboard');
    Route::resource('pages', PageController::class);
    Route::resource('page_templates', PageTemplateController::class);
    Route::resource('page_attribute_templates', PageAttributeTemplateController::class);
    Route::get('preview/{module}/{id}', [FrontController::class, 'handle'])->name('preview');
});

Route::group([
    'prefix' => 'webmixx/api',
    'as' => 'webmixx.api.',
    'middleware' => [
        'web',
        'auth',
    ],
], function (): void {
    Route::get('page_templates', [
        ApiPageTemplateController::class,
        'index',
    ])->name('page_template.index');
    Route::get('page/{page}', [
        ApiPageController::class,
        'show',
    ])->name('page.show');
});

if (app()->environment('local')) {
    Route::get('webmixx/auth', function () {
        $user = \App\Models\User::updateOrCreate([
            'id' => 1,
            'name' => 'Sjors van Leeuwen',
            'email' => 'sjors@sjorsvanleeuwen.com',
            'password' => 'dontcare',
        ]);

        \Illuminate\Support\Facades\Auth::login($user);

        return redirect()->route('webmixx.dashboard');
    })->name('login')->middleware('web');
}
