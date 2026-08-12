<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('households', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('address')->nullable();
            $table->string('postcode', 10)->nullable();
            $table->string('area')->nullable();
            $table->timestamps();
        });

        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained()->cascadeOnDelete();
            $table->foreignId('household_id')->nullable()->constrained()->nullOnDelete();
            $table->text('identity_number')->nullable();
            $table->string('identity_number_hash', 64)->nullable()->unique();
            $table->date('date_of_birth')->nullable();
            $table->string('gender', 20)->nullable();
            $table->boolean('is_household_head')->default(false);
            $table->timestamps();
        });

        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('body');
            $table->string('category')->default('general');
            $table->string('audience')->default('public');
            $table->timestamp('published_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });

        Schema::create('study_schedules', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('speaker')->nullable();
            $table->text('description')->nullable();
            $table->dateTime('starts_at');
            $table->dateTime('ends_at')->nullable();
            $table->string('location')->default('Dewan Utama');
            $table->timestamps();
        });

        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('facebook_url');
            $table->string('status')->default('recording');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });

        Schema::create('associations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('contact_name')->nullable();
            $table->timestamps();
        });

        Schema::create('association_memberships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('association_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('role')->default('member');
            $table->string('status')->default('pending');
            $table->timestamps();
            $table->unique(['association_id', 'user_id']);
        });

        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('category');
            $table->text('description');
            $table->string('phone', 20)->nullable();
            $table->string('status')->default('pending')->index();
            $table->timestamps();
        });

        Schema::create('khairat_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('household_id')->unique()->constrained()->cascadeOnDelete();
            $table->decimal('balance_due', 10, 2)->default(0);
            $table->string('status')->default('active');
            $table->timestamps();
        });

        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('khairat_account_id')->constrained()->cascadeOnDelete();
            $table->decimal('amount', 10, 2);
            $table->date('paid_on');
            $table->string('method')->default('bank_transfer');
            $table->string('status')->default('pending');
            $table->string('receipt_path')->nullable();
            $table->timestamps();
        });

        Schema::create('device_installations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('installation_id')->unique();
            $table->string('platform', 20)->default('android');
            $table->string('app_version')->nullable();
            $table->timestamp('last_seen_at')->nullable();
            $table->timestamp('disabled_at')->nullable();
            $table->timestamps();
        });

        Schema::create('notification_preferences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('category');
            $table->boolean('enabled')->default(true);
            $table->timestamps();
            $table->unique(['user_id', 'category']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notification_preferences');
        Schema::dropIfExists('device_installations');
        Schema::dropIfExists('payments');
        Schema::dropIfExists('khairat_accounts');
        Schema::dropIfExists('businesses');
        Schema::dropIfExists('association_memberships');
        Schema::dropIfExists('associations');
        Schema::dropIfExists('videos');
        Schema::dropIfExists('study_schedules');
        Schema::dropIfExists('announcements');
        Schema::dropIfExists('members');
        Schema::dropIfExists('households');
    }
};
