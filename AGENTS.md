# Repository Guide

## Stack and entrypoints

- This is a Laravel 13, Inertia v2, React 19, TypeScript, and Tailwind application. Web routes are in `routes/web.php`; Inertia page components resolve from `resources/js/Pages/**/*.tsx` through `resources/js/app.tsx`.
- `app/Http/Middleware/HandleInertiaRequests.php` deliberately shares only `id`, `name`, `phone`, `membership_status`, and `locale` for the authenticated user. Do not add sensitive member data to shared props.
- Authentication is phone-based (`+60...`), not email-based. Registration creates a pending user, household, member record, and khairat account in one database transaction.
- `members.identity_number` uses Laravel's encrypted cast and cannot be queried directly. Keep its `identity_number_hash` as the lookup field when identity-number matching is required.

## Commands

- First setup: `composer run setup`. It creates `.env`, generates the key, migrates the configured database, installs frontend dependencies, and builds assets.
- Development: `composer run dev` starts the Laravel server, database queue listener, Pail logs, and Vite together. If another local project occupies the default ports, run `php artisan serve --port=<port>` and `npm run dev` separately.
- Frontend verification: `npm run build` runs TypeScript checking before the Vite production build.
- Backend verification: `php artisan test`; use `php artisan test --filter=<test name>` for a focused run. Tests always use SQLite in-memory, array cache/session, synchronous queues, and the array mailer as configured in `phpunit.xml`.
- Formatting: `vendor\\bin\\pint` fixes PHP formatting; use `vendor\\bin\\pint --test` for a check-only run.
- Demo reset: `php artisan migrate:fresh --seed` destroys local data and recreates the demo community content and the seeded `+60123456789` / `password` account.

## Domain constraints

- Public home content comes from the `videos`, `announcements`, `study_schedules`, `associations`, and approved `businesses` tables. Preserve the `published_at` and `businesses.status = approved` visibility filters when extending it.
- Khairat belongs to a `household`, not an individual user. Device installations are user-owned and are registered by the authenticated, throttled `POST /device-installations` route for the future Android FCM bridge.
