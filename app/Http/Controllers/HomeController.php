<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Welcome', [
            'featuredVideo' => DB::table('videos')->whereNotNull('published_at')->latest('published_at')->first(),
            'announcements' => DB::table('announcements')->whereNotNull('published_at')->latest('published_at')->limit(3)->get(),
            'schedules' => DB::table('study_schedules')->where('starts_at', '>=', now())->orderBy('starts_at')->limit(3)->get(),
            'associations' => DB::table('associations')->orderBy('name')->get(),
            'businesses' => DB::table('businesses')->where('status', 'approved')->latest()->limit(3)->get(),
        ]);
    }
}
