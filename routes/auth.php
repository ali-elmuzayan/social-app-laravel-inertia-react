<?php

use App\Http\Controllers\Auth\AuthenticateSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;



// ---------------------  Authentication Routes  -----------------------------
Route::middleware('guest')->group(function () {
    // Register Routes
        Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);
    // Login & Logout Routes
    Route::get('/login', [AuthenticateSessionController::class, 'create'])->name('login.create'); 
    Route::post('/login', [AuthenticateSessionController::class, 'store'])->name('login.store');
    Route::post('/logout', [AuthenticateSessionController::class, 'destroy'])->name('logout');
});