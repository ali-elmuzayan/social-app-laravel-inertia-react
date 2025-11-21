<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/content', function () {
    return Inertia::render('Content');
});


// ------------------- should be authenticated to access the dashboard -------------------
Route::middleware('auth')->group(function() {
    Route::get('/dashboard', function() {
        return "dashboard";
    })->name('dashboard');
});