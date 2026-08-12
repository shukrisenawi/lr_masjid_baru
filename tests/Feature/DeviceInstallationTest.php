<?php

use App\Models\User;

test('an authenticated user can register an Android installation', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('device-installations.store'), [
            'installation_id' => 'test-fcm-installation-id',
            'platform' => 'android',
            'app_version' => '1.0.0',
        ])
        ->assertNoContent();

    $this->assertDatabaseHas('device_installations', [
        'user_id' => $user->id,
        'installation_id' => 'test-fcm-installation-id',
        'platform' => 'android',
    ]);
});
