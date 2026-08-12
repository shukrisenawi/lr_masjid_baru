import ApplicationLogo from '@/Components/ApplicationLogo';
import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowLongRightIcon,
    ArrowTopRightOnSquareIcon,
    BellAlertIcon,
    BuildingStorefrontIcon,
    CalendarDaysIcon,
    ChevronRightIcon,
    ClockIcon,
    MapPinIcon,
    PlayIcon,
    ShieldCheckIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

type Announcement = {
    id: number;
    title: string;
    body: string;
    category: string;
    published_at: string;
};

type Schedule = {
    id: number;
    title: string;
    speaker: string | null;
    starts_at: string;
    location: string;
};

type Association = {
    id: number;
    name: string;
    description: string | null;
    contact_name: string | null;
};

type Business = {
    id: number;
    name: string;
    category: string;
    description: string;
    phone: string | null;
};

type Video = {
    id: number;
    title: string;
    facebook_url: string;
    status: string;
    published_at: string;
};

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1761939998860-6ccd2ed9198d?auto=format&fit=crop&w=1600&q=85';
const MOSQUE_IMAGE =
    'https://images.unsplash.com/photo-1712098860823-bf3c5999ff82?auto=format&fit=crop&w=1600&q=85';

const formatDate = (value: string) =>
    new Intl.DateTimeFormat('ms-MY', {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: '2-digit',
    }).format(new Date(value));

const formatDay = (value: string) =>
    new Intl.DateTimeFormat('ms-MY', { day: '2-digit' }).format(
        new Date(value),
    );

const formatMonth = (value: string) =>
    new Intl.DateTimeFormat('ms-MY', { month: 'short' }).format(
        new Date(value),
    );

function Brand() {
    return (
        <span className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-[var(--primary)] text-[var(--primary-text)] shadow-soft">
                <ApplicationLogo className="size-7" />
            </span>
            <span className="leading-tight">
                <span className="display-title block text-lg font-semibold text-[var(--heading)]">
                    Masjid Kariah
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                    Bersama berjemaah
                </span>
            </span>
        </span>
    );
}

export default function Welcome({
    featuredVideo,
    announcements,
    schedules,
    associations,
    businesses,
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
            <Head title="Portal Kariah">
                <meta
                    name="description"
                    content="Portal komuniti Masjid Kariah untuk ceramah, pengajian, khairat dan aktiviti setempat."
                />
            </Head>
            <a className="skip-link" href="#kandungan">
                Terus ke kandungan
            </a>

            <div className="min-h-[100dvh] overflow-hidden bg-[var(--surface-strong)] text-[var(--ink)]">
                <header className="relative z-20 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_90%,transparent)] backdrop-blur-xl">
                    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <Link href="/" aria-label="Halaman utama Masjid Kariah">
                            <Brand />
                        </Link>

                        <nav
                            className="flex items-center gap-2"
                            aria-label="Navigasi utama"
                        >
                            <a
                                href="#pengajian"
                                className="hidden px-3 py-2 text-sm font-bold text-[var(--ink-soft)] transition hover:text-[var(--heading)] md:block"
                            >
                                Pengajian
                            </a>
                            <a
                                href="#komuniti"
                                className="hidden px-3 py-2 text-sm font-bold text-[var(--ink-soft)] transition hover:text-[var(--heading)] md:block"
                            >
                                Komuniti
                            </a>
                            {auth.user ? (
                                <Link
                                    className="button-primary min-h-10 px-4 py-2"
                                    href={route('dashboard')}
                                >
                                    Akaun saya
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        className="hidden px-3 py-2 text-sm font-bold text-[var(--heading)] sm:block"
                                        href={route('login')}
                                    >
                                        Log masuk
                                    </Link>
                                    <Link
                                        className="button-primary min-h-10 px-4 py-2"
                                        href={route('register')}
                                    >
                                        Daftar kariah
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main id="kandungan">
                    <section className="relative">
                        <div className="pointer-events-none absolute -left-24 top-12 size-72 rounded-full bg-[var(--sage)] opacity-60 blur-3xl" />
                        <div className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[1fr_.88fr] lg:px-8">
                            <div className="relative z-10 max-w-2xl">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs font-bold text-[var(--ink-soft)] shadow-sm">
                                    <span className="size-2 rounded-full bg-[var(--gold)]" />
                                    Portal rasmi anak kariah
                                </div>
                                <h1 className="display-title text-[clamp(2.65rem,7vw,5.6rem)] font-semibold leading-[1.02] text-[var(--heading)]">
                                    Masjid dekat,
                                    <span className="block text-[var(--primary)]">
                                        ukhwah erat.
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-xl text-base font-medium leading-7 text-[var(--ink-soft)] sm:text-lg sm:leading-8">
                                    Ceramah, pengajian, khairat dan khabar komuniti
                                    dalam satu ruang yang mudah dicapai.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a className="button-primary" href="#pengajian">
                                        Jadual minggu ini
                                        <ArrowLongRightIcon className="size-5" />
                                    </a>
                                    <Link
                                        className="button-secondary"
                                        href={
                                            auth.user
                                                ? route('dashboard')
                                                : route('register')
                                        }
                                    >
                                        Sertai komuniti
                                    </Link>
                                </div>
                                <div className="mt-10 flex items-center gap-4 border-t border-[var(--line)] pt-5 text-sm text-[var(--ink-soft)]">
                                    <ShieldCheckIcon className="size-6 shrink-0 text-[var(--gold-text)]" />
                                    <p>
                                        Maklumat ahli dan urusan khairat dilindungi
                                        untuk komuniti berdaftar.
                                    </p>
                                </div>
                            </div>

                            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                                <div className="absolute -right-4 -top-4 h-[86%] w-[86%] rounded-t-[10rem] border border-[var(--gold)]/50 sm:-right-6 sm:-top-6" />
                                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-3xl bg-[var(--sage)] shadow-lift">
                                    <img
                                        src={HERO_IMAGE}
                                        alt="Ruang solat masjid di Malaysia yang diterangi cahaya pagi"
                                        className="h-full w-full object-cover"
                                        width="900"
                                        height="1125"
                                        fetchPriority="high"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#082720]/75 via-transparent to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f2e4b9]">
                                            <ClockIcon className="size-4" />
                                            Pusat komuniti
                                        </div>
                                        <p className="display-title mt-2 max-w-sm text-2xl font-semibold leading-tight sm:text-3xl">
                                            Ruang ibadah, ilmu dan kebajikan untuk semua.
                                        </p>
                                    </div>
                                </div>
                                <div className="surface-card absolute -bottom-5 -left-2 flex items-center gap-3 px-4 py-3 sm:-left-8 sm:px-5">
                                    <span className="grid size-10 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--heading)]">
                                        <BellAlertIcon className="size-5" />
                                    </span>
                                    <span>
                                        <span className="block text-xs font-bold uppercase tracking-wider text-[var(--ink-soft)]">
                                            Notifikasi
                                        </span>
                                        <span className="block text-sm font-extrabold text-[var(--heading)]">
                                            Khabar kariah segera
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="border-y border-[var(--line)] bg-[var(--surface)]">
                        <div className="mx-auto grid max-w-7xl divide-y divide-[var(--line)] px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
                            {[
                                [CalendarDaysIcon, 'Jadual pengajian', 'Rancang masa bersama keluarga'],
                                [UserGroupIcon, 'Persatuan kariah', 'Sertai aktiviti kejiranan'],
                                [ShieldCheckIcon, 'Khairat keluarga', 'Semak bayaran dengan mudah'],
                            ].map(([Icon, title, description]) => {
                                const ItemIcon = Icon as typeof CalendarDaysIcon;
                                return (
                                    <div
                                        key={title as string}
                                        className="group flex items-center gap-4 py-5 sm:px-6 lg:py-6"
                                    >
                                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--sage)] text-[var(--heading)] transition group-hover:bg-[var(--gold-soft)]">
                                            <ItemIcon className="size-5" />
                                        </span>
                                        <span>
                                            <span className="block text-sm font-extrabold text-[var(--heading)]">
                                                {title as string}
                                            </span>
                                            <span className="mt-0.5 block text-xs text-[var(--ink-soft)]">
                                                {description as string}
                                            </span>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
                        <div>
                            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                                Dari mimbar
                            </p>
                            <h2 className="section-title">Ceramah terkini</h2>
                            {featuredVideo ? (
                                <a
                                    href={featuredVideo.facebook_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative mt-6 block aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--primary)] shadow-soft"
                                >
                                    <img
                                        src={MOSQUE_IMAGE}
                                        alt="Seni bina Masjid Putra di Putrajaya"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                                        loading="lazy"
                                        width="1000"
                                        height="625"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#082720] via-[#082720]/30 to-transparent" />
                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#a53a32] px-3 py-2 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                                        <span className="size-2 animate-pulse rounded-full bg-white" />
                                        {featuredVideo.status === 'live'
                                            ? 'Sedang langsung'
                                            : 'Rakaman terkini'}
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 text-white sm:p-7">
                                        <div>
                                            <h3 className="display-title text-2xl font-semibold leading-tight sm:text-3xl">
                                                {featuredVideo.title}
                                            </h3>
                                            <p className="mt-2 text-sm text-white/75">
                                                Facebook Page rasmi masjid
                                            </p>
                                        </div>
                                        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-[var(--gold)] text-[#102b25] transition group-hover:scale-105">
                                            <PlayIcon className="ms-0.5 size-6" />
                                        </span>
                                    </div>
                                </a>
                            ) : (
                                <div className="surface-card mt-6 p-8 text-center">
                                    <PlayIcon className="mx-auto size-8 text-[var(--gold-text)]" />
                                    <p className="mt-3 font-bold">Tiada ceramah baharu</p>
                                    <p className="mt-1 text-sm text-[var(--ink-soft)]">
                                        Rakaman seterusnya akan dipaparkan di sini.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="flex items-end justify-between border-b border-[var(--line)] pb-4">
                                <div>
                                    <h2 className="section-title">Makluman kariah</h2>
                                    <p className="section-copy">
                                        Perkara penting untuk perhatian bersama.
                                    </p>
                                </div>
                                <BellAlertIcon className="mb-1 hidden size-8 text-[var(--gold-text)] sm:block" />
                            </div>
                            <div className="divide-y divide-[var(--line)]">
                                {announcements.length > 0 ? (
                                    announcements.map((item, index) => (
                                        <article
                                            key={item.id}
                                            className="group grid grid-cols-[2.8rem_1fr_auto] gap-4 py-5"
                                        >
                                            <span className="display-title text-2xl font-semibold text-[var(--gold-text)]">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <div>
                                                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                                                    {item.category}
                                                </p>
                                                <h3 className="mt-1 font-extrabold text-[var(--heading)] transition group-hover:text-[var(--primary)]">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--ink-soft)]">
                                                    {item.body}
                                                </p>
                                            </div>
                                            <ChevronRightIcon className="mt-5 size-5 text-[var(--ink-soft)] transition group-hover:translate-x-1 group-hover:text-[var(--gold-text)]" />
                                        </article>
                                    ))
                                ) : (
                                    <p className="py-8 text-sm text-[var(--ink-soft)]">
                                        Tiada makluman buat masa ini.
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>

                    <section
                        id="pengajian"
                        className="pattern-geometry bg-[#0a2e27] py-16 text-[#fffdf8] lg:py-24"
                    >
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="max-w-2xl">
                                <h2 className="display-title text-3xl font-semibold leading-tight sm:text-4xl">
                                    Ilmu yang menghidupkan minggu.
                                </h2>
                                <p className="mt-3 text-base leading-7 text-[#c9d9d3]">
                                    Simpan tarikh dan hadir bersama ahli keluarga.
                                </p>
                            </div>

                            <div className="mt-9 grid gap-3 lg:grid-cols-3">
                                {schedules.length > 0 ? (
                                    schedules.map((item) => (
                                        <article
                                            key={item.id}
                                            className="group grid grid-cols-[4.5rem_1fr] gap-5 rounded-2xl border border-white/15 bg-white/[0.07] p-5 transition hover:-translate-y-1 hover:border-[#c89b3c]/60 hover:bg-white/[0.1]"
                                        >
                                            <div className="border-r border-white/15 pr-4 text-center">
                                                <p className="display-title text-4xl font-semibold text-[#f2e4b9]">
                                                    {formatDay(item.starts_at)}
                                                </p>
                                                <p className="mt-1 text-[11px] font-extrabold uppercase tracking-widest text-[#c9d9d3]">
                                                    {formatMonth(item.starts_at)}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[#dcb45e]">
                                                    {formatDate(item.starts_at)}
                                                </p>
                                                <h3 className="mt-2 text-lg font-extrabold">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 text-sm text-[#c9d9d3]">
                                                    {item.speaker ??
                                                        'Penceramah akan dimaklumkan'}
                                                </p>
                                                <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-white/75">
                                                    <MapPinIcon className="size-4" />
                                                    {item.location}
                                                </p>
                                            </div>
                                        </article>
                                    ))
                                ) : (
                                    <p className="text-[#c9d9d3]">
                                        Jadual baharu akan diumumkan tidak lama lagi.
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>

                    <section
                        id="komuniti"
                        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
                    >
                        <h2 className="section-title">Bergerak bersama komuniti</h2>
                        <p className="section-copy">
                            Persatuan yang menjaga kebajikan, keselamatan dan
                            pembangunan generasi kariah.
                        </p>
                        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.15fr_.85fr_.85fr]">
                            {associations.map((item, index) => (
                                <article
                                    key={item.id}
                                    className={`group relative min-h-64 overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lift ${
                                        index === 0
                                            ? 'pattern-geometry border-transparent bg-[var(--primary)] text-[var(--primary-text)] md:col-span-2 lg:col-span-1'
                                            : 'surface-card'
                                    }`}
                                >
                                    <span
                                        className={`grid size-12 place-items-center rounded-xl ${
                                            index === 0
                                                ? 'bg-white/12 text-[#f2e4b9]'
                                                : 'bg-[var(--sage)] text-[var(--heading)]'
                                        }`}
                                    >
                                        <UserGroupIcon className="size-6" />
                                    </span>
                                    <h3
                                        className={`display-title mt-12 text-2xl font-semibold ${
                                            index === 0
                                                ? 'text-[var(--primary-text)]'
                                                : 'text-[var(--heading)]'
                                        }`}
                                    >
                                        {item.name}
                                    </h3>
                                    <p
                                        className={`mt-3 text-sm leading-6 ${
                                            index === 0
                                                ? 'text-[var(--primary-text)]/75'
                                                : 'text-[var(--ink-soft)]'
                                        }`}
                                    >
                                        {item.description}
                                    </p>
                                    <div className="absolute right-5 top-5">
                                        <ArrowLongRightIcon
                                            className={`size-6 transition group-hover:translate-x-1 ${
                                                index === 0
                                                    ? 'text-[#f2e4b9]'
                                                    : 'text-[var(--gold-text)]'
                                            }`}
                                        />
                                    </div>
                                    {item.contact_name && (
                                        <p
                                            className={`mt-5 text-xs font-bold ${
                                                index === 0
                                                    ? 'text-[var(--primary-text)]/65'
                                                    : 'text-[var(--ink-soft)]'
                                            }`}
                                        >
                                            Hubungi {item.contact_name}
                                        </p>
                                    )}
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="border-y border-[var(--line)] bg-[var(--surface-muted)] py-16 lg:py-20">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                                <div>
                                    <h2 className="section-title">Bisnes anak kariah</h2>
                                    <p className="section-copy">
                                        Dahulukan perniagaan jiran dan kenalan
                                        setempat.
                                    </p>
                                </div>
                                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs font-bold text-[var(--ink-soft)]">
                                    <BuildingStorefrontIcon className="size-4 text-[var(--gold-text)]" />
                                    Disemak pihak masjid
                                </span>
                            </div>

                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                {businesses.length > 0 ? (
                                    businesses.map((item) => (
                                        <article
                                            key={item.id}
                                            className="surface-card group flex min-h-56 flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <span className="rounded-full bg-[var(--gold-soft)] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[var(--heading)]">
                                                    {item.category}
                                                </span>
                                                <ArrowTopRightOnSquareIcon className="size-5 text-[var(--ink-soft)] transition group-hover:text-[var(--gold-text)]" />
                                            </div>
                                            <h3 className="display-title mt-8 text-2xl font-semibold text-[var(--heading)]">
                                                {item.name}
                                            </h3>
                                            <p className="mt-3 flex-1 text-sm leading-6 text-[var(--ink-soft)]">
                                                {item.description}
                                            </p>
                                            {item.phone && (
                                                <a
                                                    href={`tel:${item.phone}`}
                                                    className="mt-5 text-sm font-extrabold text-[var(--primary)]"
                                                >
                                                    {item.phone}
                                                </a>
                                            )}
                                        </article>
                                    ))
                                ) : (
                                    <p className="text-sm text-[var(--ink-soft)]">
                                        Direktori perniagaan sedang dikemas kini.
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-[#071f1a] px-4 py-12 text-[#c9d9d3] sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
                        <div>
                            <span className="flex items-center gap-3 text-[#fffdf8]">
                                <span className="grid size-11 place-items-center rounded-xl bg-[#c89b3c] text-[#102b25]">
                                    <ApplicationLogo className="size-7" />
                                </span>
                                <span className="display-title text-xl font-semibold">
                                    Masjid Kariah
                                </span>
                            </span>
                            <p className="mt-5 max-w-md text-sm leading-6">
                                Menghubungkan masjid, keluarga dan komuniti dalam
                                urusan ibadah serta kebajikan.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
                            <a href="#pengajian" className="hover:text-[#f2e4b9]">
                                Pengajian
                            </a>
                            <a href="#komuniti" className="hover:text-[#f2e4b9]">
                                Komuniti
                            </a>
                            <Link href={route('login')} className="hover:text-[#f2e4b9]">
                                Log masuk
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/50">
                        Portal komuniti Masjid Kariah
                    </div>
                </footer>
            </div>
        </>
    );
}
