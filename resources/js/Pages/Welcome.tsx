import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRightIcon,
    BellAlertIcon,
    CalendarDaysIcon,
    ChevronRightIcon,
    MegaphoneIcon,
    PlayCircleIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import { PageProps } from '@/types';

type Announcement = { id: number; title: string; body: string; category: string; published_at: string };
type Schedule = { id: number; title: string; speaker: string | null; starts_at: string; location: string };
type Association = { id: number; name: string; description: string | null; contact_name: string | null };
type Business = { id: number; name: string; category: string; description: string; phone: string | null };
type Video = { id: number; title: string; facebook_url: string; status: string; published_at: string };

const formatDate = (value: string) => new Intl.DateTimeFormat('ms-MY', {
    day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit',
}).format(new Date(value));

export default function Welcome({
    featuredVideo, announcements, schedules, associations, businesses,
}: PageProps<{
    featuredVideo: Video | null;
    announcements: Announcement[];
    schedules: Schedule[];
    associations: Association[];
    businesses: Business[];
}>) {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Portal Kariah" />
            <a className="skip-link" href="#kandungan">Terus ke kandungan</a>
            <div className="min-h-[100dvh] bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
                <header className="border-b border-emerald-950/10 bg-stone-50/90 backdrop-blur dark:border-white/10 dark:bg-stone-950/90">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                        <Link href="/" className="flex items-center gap-3">
                            <span className="grid size-10 place-items-center rounded-full bg-emerald-800 text-lg font-bold text-white">M</span>
                            <span>
                                <span className="block text-sm font-bold tracking-tight">Masjid Kariah</span>
                                <span className="block text-xs text-stone-600 dark:text-stone-400">Komuniti setempat</span>
                            </span>
                        </Link>
                        <nav className="flex items-center gap-2" aria-label="Navigasi utama">
                            {auth.user ? (
                                <Link className="button-primary px-4 py-2 text-sm" href={route('dashboard')}>Akaun saya</Link>
                            ) : (
                                <>
                                    <Link className="hidden px-3 py-2 text-sm font-semibold sm:block" href={route('login')}>Log masuk</Link>
                                    <Link className="button-primary px-4 py-2 text-sm" href={route('register')}>Daftar</Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main id="kandungan">
                    <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-16">
                        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr]">
                            <div>
                                <p className="mb-4 text-sm font-bold tracking-wide text-emerald-800 dark:text-emerald-300">PORTAL RASMI ANAK KARIAH</p>
                                <h1 className="max-w-3xl text-4xl font-black tracking-tight text-emerald-950 sm:text-6xl dark:text-emerald-100">Dekat dengan masjid. Dekat dengan komuniti.</h1>
                                <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-700 dark:text-stone-300">Ikuti ceramah, jadual pengajian, urusan khairat dan aktiviti kariah dari satu tempat.</p>
                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a className="button-primary" href="#pengajian">Lihat jadual <ArrowRightIcon className="size-4" /></a>
                                    <Link className="button-secondary" href={auth.user ? route('dashboard') : route('register')}>Sertai kariah</Link>
                                </div>
                            </div>
                            <aside className="rounded-3xl bg-emerald-900 p-6 text-white shadow-xl shadow-emerald-950/15 sm:p-8">
                                <BellAlertIcon className="size-7 text-emerald-200" />
                                <p className="mt-5 text-sm font-bold tracking-wide text-emerald-200">MAKLUMAN HARI INI</p>
                                <p className="mt-2 text-2xl font-bold leading-tight">Segala pengumuman, program dan berita penting di satu tempat.</p>
                                <p className="mt-4 text-sm leading-relaxed text-emerald-100">Aktifkan notifikasi dalam aplikasi untuk berita kematian, program dan pengajian.</p>
                            </aside>
                        </div>
                    </section>

                    <section className="border-y border-emerald-950/10 bg-white dark:border-white/10 dark:bg-stone-900">
                        <div className="mx-auto grid max-w-6xl divide-y divide-emerald-950/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
                            {[
                                ['Ceramah terkini', 'Tonton live dan rakaman dari Facebook Page'],
                                ['Pengajian', 'Jadual yang mudah dirujuk setiap minggu'],
                                ['Khairat keluarga', 'Semak status dan hantar bukti bayaran'],
                            ].map(([title, description]) => <div key={title} className="py-5 sm:px-6"><p className="font-bold">{title}</p><p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{description}</p></div>)}
                        </div>
                    </section>

                    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:py-16">
                        <div>
                            <div className="flex items-center justify-between"><h2 className="section-title">Ceramah & live</h2><Link href="/" className="text-sm font-bold text-emerald-800 dark:text-emerald-300">Lihat semua</Link></div>
                            <a href={featuredVideo?.facebook_url ?? '#'} target="_blank" rel="noreferrer" className="group mt-5 block overflow-hidden rounded-3xl bg-emerald-950 p-6 text-white shadow-lg transition hover:-translate-y-0.5">
                                <div className="flex items-center justify-between"><span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">{featuredVideo?.status === 'live' ? 'SEDANG LANGSUNG' : 'RAKAMAN TERKINI'}</span><PlayCircleIcon className="size-9 text-emerald-200 transition group-hover:scale-110" /></div>
                                <h3 className="mt-14 text-2xl font-bold">{featuredVideo?.title ?? 'Ceramah akan dikemas kini'}</h3>
                                <p className="mt-2 text-sm text-emerald-100">Tonton melalui Facebook Page rasmi masjid</p>
                            </a>
                        </div>
                        <div>
                            <div className="flex items-center justify-between"><h2 className="section-title">Makluman</h2><MegaphoneIcon className="size-6 text-emerald-800 dark:text-emerald-300" /></div>
                            <div className="mt-5 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white px-5 dark:divide-stone-700 dark:border-stone-700 dark:bg-stone-900">
                                {announcements.map((item) => <article key={item.id} className="py-4"><p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">{item.category.toUpperCase()}</p><h3 className="mt-1 font-bold">{item.title}</h3><p className="mt-1 line-clamp-2 text-sm text-stone-600 dark:text-stone-400">{item.body}</p></article>)}
                            </div>
                        </div>
                    </section>

                    <section id="pengajian" className="bg-emerald-950 py-12 text-white lg:py-16">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="flex items-center justify-between"><div><p className="text-sm font-bold text-emerald-300">MINGGU INI</p><h2 className="mt-1 text-3xl font-black tracking-tight">Jadual pengajian</h2></div><CalendarDaysIcon className="size-8 text-emerald-300" /></div>
                            <div className="mt-7 grid gap-3 md:grid-cols-3">{schedules.map((item) => <article key={item.id} className="rounded-2xl border border-emerald-800 bg-emerald-900/60 p-5"><p className="text-sm font-bold text-emerald-300">{formatDate(item.starts_at)}</p><h3 className="mt-3 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm text-emerald-100">{item.speaker ?? 'Penceramah akan dimaklumkan'} · {item.location}</p></article>)}</div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
                        <h2 className="section-title">Persatuan dalam kariah</h2><p className="mt-2 text-stone-600 dark:text-stone-400">Sertai gerakan yang menguatkan kejiranan kita.</p>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">{associations.map((item) => <article key={item.id} className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-900"><UserGroupIcon className="size-7 text-emerald-800 dark:text-emerald-300" /><h3 className="mt-4 text-lg font-bold">{item.name}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{item.description}</p><button type="button" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-emerald-800 dark:text-emerald-300">Ketahui lanjut <ChevronRightIcon className="size-4" /></button></article>)}</div>
                    </section>

                    <section className="border-t border-stone-200 bg-stone-100 py-12 dark:border-stone-800 dark:bg-stone-900">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6"><h2 className="section-title">Bisnes anak kariah</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{businesses.map((item) => <article key={item.id} className="rounded-2xl bg-white p-5 shadow-sm dark:bg-stone-800"><p className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">{item.category}</p><h3 className="mt-2 text-lg font-bold">{item.name}</h3><p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{item.description}</p></article>)}</div></div>
                    </section>
                </main>
                <footer className="bg-stone-950 px-4 py-10 text-stone-300"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row"><p className="font-bold text-white">Masjid Kariah</p><p className="text-sm">Portal komuniti untuk anak kariah.</p></div></footer>
            </div>
        </>
    );
}
