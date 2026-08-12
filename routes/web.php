<?php

use App\Http\Controllers\DeviceInstallationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class)->name('home');

Route::get('/dashboard', function () {
    $account = optional(request()->user()->member?->household?->khairatAccount);

    return Inertia::render('Dashboard', [
        'membershipStatus' => request()->user()->membership_status,
        'khairat' => [
            'status' => $account->status ?? 'Belum didaftarkan',
            'balanceDue' => $account->balance_due ?? '0.00',
        ],
    ]);
})->middleware('auth')->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/device-installations', [DeviceInstallationController::class, 'store'])
        ->middleware('throttle:30,1')
        ->name('device-installations.store');
});

require __DIR__.'/auth.php';
