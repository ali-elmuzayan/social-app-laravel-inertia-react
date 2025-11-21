<?php

use App\Http\Controllers\Auth\AuthenticateSessionController;
use Illuminate\Support\Facades\Route;


Route::get('/login', [AuthenticateSessionController::class, 'create'])->name('login.create'); 
Route::post('/login', [AuthenticateSessionController::class, 'store'])->name('login.store');
Route::post('/logout', [AuthenticateSessionController::class, 'destroy'])->name('logout');