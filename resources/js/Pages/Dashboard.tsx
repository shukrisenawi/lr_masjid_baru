import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowLongRightIcon,
    BellAlertIcon,
    CalendarDaysIcon,
    CheckBadgeIcon,
    ClockIcon,
    CurrencyDollarIcon,
    DocumentArrowUpIcon,
    MapPinIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    UserIcon,
} from '@heroicons/react/24/outline';

type DashboardSchedule = {
    id: number;
    title: string;
    speaker: string | null;
    starts_at: string;
    location: string;
};

type DashboardAnnouncement = {
    id: number;
    title: string;
    body: string;
    category: string;
};

type QuickLink = {
    label: string;
    description: string;
    href: string;
    icon: typeof CalendarDaysIcon;
};

const formatSchedule = (value: string) =>
    new Intl.DateTimeFormat('ms-MY', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: '2-digit',
    }).format(new Date(value));

export default function Dashboard({
    membershipStatus,
    khairat,
    schedules,
    announcements,
}: PageProps<{
    membershipStatus: string;
    khairat: { status: string; balanceDue: string };
    schedules: DashboardSchedule[];
    announcements: DashboardAnnouncement[];
}>) {
    const user = usePage<PageProps>().props.auth.user;
    const pending = membershipStatus === 'pending';
    const rejected = membershipStatus === 'rejected';
    const hasBalance = Number(khairat.balanceDue) > 0;
    const khairatStatus =
        {
            active: 'Aktif',
            inactive: 'Tidak aktif',
            suspended: 'Digantung',
        }[khairat.status] ?? khairat.status;
    const today = new Intl.DateTimeFormat('ms-MY', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    }).format(new Date());

    const quickLinks: QuickLink[] = [
        {
            label: 'Jadual pengajian',
            description: 'Lihat pengisian minggu ini',
            href: '/#pengajian',
            icon: CalendarDaysIcon,
        },
        {
            label: 'Persatuan',
            description: 'Kenali komuniti kariah',
            href: '/#komuniti',
            icon: UserGroupIcon,
        },
        {
            label: 'Profil keluarga',
            description: 'Kemas kini maklumat anda',
            href: route('profile.edit'),
            icon: UserIcon,
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Utama">
                <meta
                    name="description"
                    content="Ringkasan akaun ahli, khairat keluarga, pengajian dan makluman Masjid Kariah."
                />
            </Head>
            <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-bold capitalize text-[var(--ink-soft)]">
                            {today}
                        </p>
                        <h1 className="display-title mt-1 text-3xl font-semibold text-[var(--heading)] sm:text-4xl">
                            Assalamualaikum, {user.name.split(' ')[0]}.
                        </h1>
                        <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                            Ini ringkasan kariah dan keluarga anda hari ini.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="button-secondary w-fit min-h-10 px-4 py-2"
                    >
                        Portal awam
                        <ArrowLongRightIcon className="size-4" />
                    </Link>
                </div>

                {(pending || rejected) && (
                    <section
                        className={`mt-7 flex gap-4 rounded-2xl border p-5 ${
                            rejected
                                ? 'border-[#a53a32]/25 bg-[#a53a32]/10'
                                : 'border-[var(--gold)]/35 bg-[var(--gold-soft)]/55'
                        }`}
                    >
                        {rejected ? (
                            <ShieldCheckIcon className="size-7 shrink-0 text-[var(--danger)]" />
                        ) : (
                            <ClockIcon className="size-7 shrink-0 text-[var(--gold-text)]" />
                        )}
                        <div>
                            <h2 className="font-extrabold text-[var(--heading)]">
                                {rejected
                                    ? 'Pendaftaran memerlukan tindakan'
                                    : 'Pendaftaran sedang disemak'}
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-[var(--ink-soft)]">
                                {rejected
                                    ? 'Hubungi pejabat masjid untuk menyemak maklumat permohonan anda.'
                                    : 'Pihak masjid sedang mengesahkan alamat dan maklumat keluarga anda.'}
                            </p>
                        </div>
                    </section>
                )}

                <div className="mt-7 grid gap-5 xl:grid-cols-[1.15fr_.85fr]">
                    <section className="pattern-geometry relative overflow-hidden rounded-2xl bg-[#0a2e27] p-6 text-[#fffdf8] shadow-lift sm:p-8">
                        <div className="absolute -right-12 -top-12 size-48 rounded-full border border-[#c89b3c]/25" />
                        <div className="absolute -right-4 -top-4 size-28 rounded-full border border-[#c89b3c]/25" />
                        <div className="relative flex min-h-64 flex-col justify-between">
                            <div className="flex items-start justify-between gap-5">
                                <div>
                                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#dcb45e]">
                                        Akaun khairat keluarga
                                    </p>
                                    <p className="display-title mt-3 text-4xl font-semibold sm:text-5xl">
                                        RM {khairat.balanceDue}
                                    </p>
                                    <p className="mt-2 text-sm text-[#c9d9d3]">
                                        {hasBalance
                                            ? 'Baki yang perlu dijelaskan'
                                            : 'Tiada baki tertunggak'}
                                    </p>
                                </div>
                                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-[#f2e4b9]">
                                    {hasBalance ? (
                                        <CurrencyDollarIcon className="size-6" />
                                    ) : (
                                        <CheckBadgeIcon className="size-6" />
                                    )}
                                </span>
                            </div>
                            <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs font-bold text-[#c9d9d3]">
                                    Status akaun: <span className="text-white">{khairatStatus}</span>
                                </p>
                                <button
                                    type="button"
                                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#c89b3c] px-4 py-2.5 text-sm font-extrabold text-[#102b25] transition hover:bg-[#dcb45e] active:translate-y-px"
                                >
                                    <DocumentArrowUpIcon className="size-5" />
                                    Hantar bukti bayaran
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="surface-card p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="display-title text-2xl font-semibold text-[var(--heading)]">
                                    Pengajian terdekat
                                </h2>
                                <p className="mt-1 text-sm text-[var(--ink-soft)]">
                                    Simpan masa untuk hadir bersama.
                                </p>
                            </div>
                            <CalendarDaysIcon className="size-7 text-[var(--gold-text)]" />
                        </div>
                        <div className="mt-5 divide-y divide-[var(--line)]">
                            {schedules.length > 0 ? (
                                schedules.map((item) => (
                                    <article key={item.id} className="py-4 first:pt-0 last:pb-0">
                                        <p className="text-xs font-extrabold text-[var(--gold-text)]">
                                            {formatSchedule(item.starts_at)}
                                        </p>
                                        <h3 className="mt-1 font-extrabold text-[var(--heading)]">
                                            {item.title}
                                        </h3>
                                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--ink-soft)]">
                                            <span>{item.speaker ?? 'Penceramah akan dimaklumkan'}</span>
                                            <span className="flex items-center gap-1">
                                                <MapPinIcon className="size-3.5" />
                                                {item.location}
                                            </span>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <p className="py-5 text-sm text-[var(--ink-soft)]">
                                    Tiada jadual baharu buat masa ini.
                                </p>
                            )}
                        </div>
                    </section>
                </div>

                <section className="mt-9">
                    <h2 className="display-title text-2xl font-semibold text-[var(--heading)]">
                        Akses pantas
                    </h2>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {quickLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="surface-card group flex min-h-32 items-start gap-4 p-5 transition hover:-translate-y-1 hover:shadow-lift"
                                >
                                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--sage)] text-[var(--heading)] transition group-hover:bg-[var(--gold-soft)]">
                                        <Icon className="size-5" />
                                    </span>
                                    <span>
                                        <span className="block font-extrabold text-[var(--heading)]">
                                            {item.label}
                                        </span>
                                        <span className="mt-1 block text-xs leading-5 text-[var(--ink-soft)]">
                                            {item.description}
                                        </span>
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <section className="mt-9 grid gap-5 lg:grid-cols-[auto_1fr]">
                    <div className="lg:w-64">
                        <h2 className="display-title text-2xl font-semibold text-[var(--heading)]">
                            Makluman baharu
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                            Khabar penting daripada pihak masjid.
                        </p>
                        <BellAlertIcon className="mt-5 hidden size-8 text-[var(--gold-text)] lg:block" />
                    </div>
                    <div className="surface-card divide-y divide-[var(--line)] px-5 sm:px-6">
                        {announcements.length > 0 ? (
                            announcements.map((item) => (
                                <article key={item.id} className="py-5">
                                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[var(--gold-text)]">
                                        {item.category}
                                    </p>
                                    <h3 className="mt-1 font-extrabold text-[var(--heading)]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--ink-soft)]">
                                        {item.body}
                                    </p>
                                </article>
                            ))
                        ) : (
                            <p className="py-6 text-sm text-[var(--ink-soft)]">
                                Tiada makluman baharu.
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
