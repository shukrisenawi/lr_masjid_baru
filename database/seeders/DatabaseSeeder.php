<?php

namespace Database\Seeders;

use App\Models\Household;
use App\Models\KhairatAccount;
use App\Models\Member;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $admin = User::factory()->create([
            'name' => 'Admin Masjid',
            'phone' => '+60123456789',
            'email' => 'admin@masjid.test',
            'membership_status' => 'approved',
        ]);

        $household = Household::create([
            'name' => 'Keluarga Admin Masjid',
            'address' => 'No. 1, Jalan Kariah, 43000 Kajang, Selangor',
        ]);

        Member::create(['user_id' => $admin->id, 'household_id' => $household->id, 'is_household_head' => true]);
        KhairatAccount::create(['household_id' => $household->id, 'balance_due' => 0]);

        DB::table('videos')->insert([
            'title' => 'Kuliah Maghrib: Membina Keluarga Berkat',
            'facebook_url' => 'https://www.facebook.com/',
            'status' => 'live',
            'published_at' => now(),
            'created_at' => now(), 'updated_at' => now(),
        ]);

        DB::table('announcements')->insert([
            ['title' => 'Gotong-royong perdana', 'body' => 'Mari bersama-sama membersihkan kawasan masjid pada hari Sabtu ini selepas Subuh.', 'category' => 'program', 'audience' => 'public', 'published_at' => now(), 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sumbangan wakaf air minuman', 'body' => 'Sumbangan boleh dibuat di pejabat masjid pada waktu bekerja.', 'category' => 'makluman', 'audience' => 'public', 'published_at' => now(), 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Kelas tajwid dewasa', 'body' => 'Pendaftaran kelas tajwid sesi baharu kini dibuka kepada semua anak kariah.', 'category' => 'pengajian', 'audience' => 'public', 'published_at' => now(), 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('study_schedules')->insert([
            ['title' => 'Kuliah Maghrib', 'speaker' => 'Ustaz Ahmad', 'description' => 'Tafsir ringkas', 'starts_at' => now()->addDay()->setTime(19, 45), 'ends_at' => now()->addDay()->setTime(21, 00), 'location' => 'Dewan Utama', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Tazkirah Subuh', 'speaker' => 'Ustaz Firdaus', 'description' => 'Pengisian hujung minggu', 'starts_at' => now()->addDays(2)->setTime(6, 30), 'ends_at' => now()->addDays(2)->setTime(7, 15), 'location' => 'Ruang Solat Utama', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Kelas Tajwid Dewasa', 'speaker' => 'Ustazah Mariam', 'description' => 'Asas bacaan Al-Quran', 'starts_at' => now()->addDays(3)->setTime(20, 30), 'ends_at' => now()->addDays(3)->setTime(21, 30), 'location' => 'Bilik Ilmu', 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('associations')->insert([
            ['name' => 'Rukun Tetangga', 'slug' => 'rukun-tetangga', 'description' => 'Mengukuhkan keselamatan dan hubungan kejiranan.', 'contact_name' => 'Pengerusi Rukun Tetangga', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Khairat Kematian', 'slug' => 'khairat-kematian', 'description' => 'Sokongan kebajikan dan pengurusan kematian ahli.', 'contact_name' => 'Bendahari Khairat', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Pengajian Pemuda', 'slug' => 'pengajian-pemuda', 'description' => 'Ruang ilmu, ukhwah dan aktiviti belia kariah.', 'contact_name' => 'Penyelaras Pemuda', 'created_at' => now(), 'updated_at' => now()],
        ]);

        DB::table('businesses')->insert([
            ['user_id' => $admin->id, 'name' => 'Dapur Kariah', 'category' => 'Makanan', 'description' => 'Tempahan kuih-muih dan katering kenduri.', 'phone' => '+60123456789', 'status' => 'approved', 'created_at' => now(), 'updated_at' => now()],
            ['user_id' => $admin->id, 'name' => 'Bengkel Harmoni', 'category' => 'Servis', 'description' => 'Servis asas motosikal dan kereta.', 'phone' => '+60123456789', 'status' => 'approved', 'created_at' => now(), 'updated_at' => now()],
            ['user_id' => $admin->id, 'name' => 'Tuisyen Ilmu', 'category' => 'Pendidikan', 'description' => 'Kelas tambahan sekolah rendah dan menengah.', 'phone' => '+60123456789', 'status' => 'approved', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
