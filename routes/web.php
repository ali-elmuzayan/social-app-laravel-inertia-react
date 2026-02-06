<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\AboutController;
use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Frontend\DashboardController;

// ------------- Frontend Pages ----------------
Route::get('/', HomeController::class);
Route::get('/about', AboutController::class);
Route::get('/content', ContactController::class);


// ------------------------------- Dashboard ---------------------------
Route::middleware('auth')->group(function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

