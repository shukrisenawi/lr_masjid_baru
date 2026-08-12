<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DeviceInstallationController extends Controller
{
    public function store(Request $request): Response
    {
        $data = $request->validate([
            'installation_id' => ['required', 'string', 'max:255'],
            'platform' => ['required', 'in:android,ios'],
            'app_version' => ['nullable', 'string', 'max:50'],
        ]);

        $request->user()->deviceInstallations()->updateOrCreate(
            ['installation_id' => $data['installation_id']],
            [...$data, 'last_seen_at' => now(), 'disabled_at' => null],
        );

        return response()->noContent();
    }
}
