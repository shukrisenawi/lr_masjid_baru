<?php

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});

test('new users can register', function () {
    $response = $this->post('/register', [
        'name' => 'Test User',
        'phone' => '+60129876543',
        'address' => 'No. 2, Jalan Kariah',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $this->assertDatabaseHas('users', ['phone' => '+60129876543', 'membership_status' => 'pending']);
    $this->assertDatabaseHas('members', ['is_household_head' => true]);
    $response->assertRedirect(route('dashboard', absolute: false));
});
