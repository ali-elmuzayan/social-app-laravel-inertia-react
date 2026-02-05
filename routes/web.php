<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\AboutController;
use App\Http\Controllers\Frontend\ContactController;

Route::get('/', HomeController::class);

Route::get('/about', AboutController::class);

Route::get('/content', ContactController::class);



Route::get('/dashboard', function() {
    return Inertia::render('dashboard/index');
})->name('dashboard');


Route::resource('posts', PostController::class)->only(['index', 'store', 'update', 'destroy']);