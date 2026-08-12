import ApplicationLogo from '@/Components/ApplicationLogo';
import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    ArrowLeftOnRectangleIcon,
    CalendarDaysIcon,
    HomeIcon,
    UserGroupIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import { PropsWithChildren, ReactNode } from 'react';

type NavigationItem = {
    label: string;
    href: string;
    icon: typeof HomeIcon;
    active: boolean;
};

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
                <span className="block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                    Portal ahli
                </span>
            </span>
        </span>
    );
}

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage<PageProps>().props.auth.user;
    const currentRoute = route().current();
    const navigation: NavigationItem[] = [
        {
            label: 'Utama',
            href: route('dashboard'),
            icon: HomeIcon,
            active: currentRoute === 'dashboard',
        },
        {
            label: 'Jadual',
            href: '/#pengajian',
            icon: CalendarDaysIcon,
            active: false,
        },
        {
            label: 'Komuniti',
            href: '/#komuniti',
            icon: UserGroupIcon,
            active: false,
        },
        {
            label: 'Akaun',
            href: route('profile.edit'),
            icon: UserIcon,
            active: currentRoute === 'profile.edit',
        },
    ];

    return (
        <div className="min-h-[100dvh] bg-[var(--surface-strong)] text-[var(--ink)] lg:grid lg:grid-cols-[17.5rem_1fr]">
            <aside className="pattern-geometry hidden min-h-[100dvh] border-r border-[var(--line)] bg-[var(--surface)] p-5 lg:flex lg:flex-col">
                <Link href="/" className="px-2 py-2">
                    <Brand />
                </Link>

                <nav className="mt-10 space-y-1.5" aria-label="Navigasi ahli">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-bold transition ${
                                    item.active
                                        ? 'bg-[var(--primary)] text-[var(--primary-text)] shadow-soft'
                                        : 'text-[var(--ink-soft)] hover:bg-[var(--sage)] hover:text-[var(--heading)]'
                                }`}
                            >
                                <Icon className="size-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4">
                    <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl bg-[var(--gold-soft)] font-extrabold text-[var(--heading)]">
                            {user.name.charAt(0).toUpperCase()}
                        </span>
                        <div className="min-w-0">
                            <p className="truncate text-sm font-extrabold text-[var(--heading)]">
                                {user.name}
                            </p>
                            <p className="truncate text-xs text-[var(--ink-soft)]">
                                {user.phone}
                            </p>
                        </div>
                    </div>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="mt-4 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--danger)]"
                    >
                        <ArrowLeftOnRectangleIcon className="size-5" />
                        Log keluar
                    </Link>
                </div>
            </aside>

            <div className="min-w-0">
                <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_88%,transparent)] px-4 backdrop-blur-xl lg:hidden">
                    <div className="mx-auto flex h-[68px] max-w-3xl items-center justify-between">
                        <Link href="/" aria-label="Portal Masjid Kariah">
                            <Brand />
                        </Link>
                        <Link
                            href={route('profile.edit')}
                            aria-label="Buka profil"
                            className="grid size-11 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--heading)]"
                        >
                            <UserIcon className="size-5" />
                        </Link>
                    </div>
                </header>

                {header && (
                    <header className="border-b border-[var(--line)] bg-[var(--surface)]">
                        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="pb-28 lg:pb-0">{children}</main>

                <nav
                    className="fixed inset-x-0 bottom-0 z-20 border-t border-[var(--line)] bg-[color-mix(in_srgb,var(--surface)_92%,transparent)] px-2 pb-[max(.65rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl lg:hidden"
                    aria-label="Navigasi bawah"
                >
                    <div className="mx-auto grid max-w-xl grid-cols-4">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-bold transition ${
                                        item.active
                                            ? 'text-[var(--primary)]'
                                            : 'text-[var(--ink-soft)]'
                                    }`}
                                >
                                    <span
                                        className={`grid h-7 min-w-10 place-items-center rounded-full px-2 ${
                                            item.active ? 'bg-[var(--gold-soft)]' : ''
                                        }`}
                                    >
                                        <Icon className="size-5" />
                                    </span>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </div>
    );
}
