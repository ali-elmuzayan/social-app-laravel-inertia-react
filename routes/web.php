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



    Route::get('/dashboard', function() {
        return Inertia::render('Dashboard/Index');
    })->name('dashboard');
