<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        
        return Inertia::render('dashboard/index', [
            'posts' => Post::latest()->with('user')->limit(10)->get(),
        ]);
    }
}
