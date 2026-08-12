import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { PropsWithChildren } from 'react';

const AUTH_IMAGE =
    'https://images.unsplash.com/photo-1598968992697-a8488564227f?auto=format&fit=crop&w=1400&q=85';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-[100dvh] bg-[var(--surface-strong)] text-[var(--ink)] lg:grid lg:grid-cols-[minmax(0,.9fr)_minmax(30rem,1.1fr)]">
            <aside className="relative hidden min-h-[100dvh] overflow-hidden bg-[#0a2e27] lg:block">
                <img
                    src={AUTH_IMAGE}
                    alt="Seni bina masjid di Putrajaya pada waktu malam"
                    className="absolute inset-0 h-full w-full object-cover opacity-65"
                    width="1200"
                    height="1600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b17] via-[#0a2e27]/45 to-[#0a2e27]/15" />
                <div className="pattern-geometry absolute inset-0 opacity-30" />
                <div className="relative flex min-h-[100dvh] flex-col justify-between p-10 xl:p-14">
                    <Link
                        href="/"
                        className="flex w-fit items-center gap-3 text-[#fffdf8]"
                    >
                        <span className="grid size-12 place-items-center rounded-xl bg-[#c89b3c] text-[#102b25] shadow-lg">
                            <ApplicationLogo className="size-8" />
                        </span>
                        <span>
                            <span className="display-title block text-xl font-semibold">
                                Masjid Kariah
                            </span>
                            <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#c9d9d3]">
                                Bersama berjemaah
                            </span>
                        </span>
                    </Link>

                    <div className="max-w-xl">
                        <p className="display-title text-4xl font-semibold leading-tight text-[#fffdf8] xl:text-5xl">
                            Satu akaun untuk keluarga dan komuniti.
                        </p>
                        <p className="mt-5 max-w-md text-base leading-7 text-[#c9d9d3]">
                            Urus keahlian, khairat dan maklumat kariah dengan
                            mudah dari mana-mana sahaja.
                        </p>
                        <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-sm font-bold text-[#eef4ed] backdrop-blur">
                            <ShieldCheckIcon className="size-5 text-[#dcb45e]" />
                            Maklumat anda dilindungi
                        </div>
                    </div>
                </div>
            </aside>

            <main className="relative flex min-h-[100dvh] items-start justify-center px-4 py-6 sm:px-8 sm:py-10 lg:items-center lg:px-12">
                <div className="pointer-events-none absolute right-0 top-0 size-72 rounded-full bg-[var(--sage)] opacity-70 blur-3xl" />
                <div className="relative w-full max-w-lg">
                    <div className="mb-6 flex items-center justify-between lg:hidden">
                        <Link
                            href="/"
                            className="flex items-center gap-3 text-[var(--heading)]"
                        >
                            <span className="grid size-11 place-items-center rounded-xl bg-[var(--primary)] text-[var(--primary-text)]">
                                <ApplicationLogo className="size-7" />
                            </span>
                            <span className="display-title text-lg font-semibold">
                                Masjid Kariah
                            </span>
                        </Link>
                        <Link
                            href="/"
                            aria-label="Kembali ke halaman utama"
                            className="grid size-11 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--heading)]"
                        >
                            <ArrowLeftIcon className="size-5" />
                        </Link>
                    </div>

                    <div className="surface-card px-5 py-6 sm:px-8 sm:py-8">
                        {children}
                    </div>

                    <p className="mt-5 text-center text-xs leading-5 text-[var(--ink-soft)]">
                        Dengan meneruskan, anda bersetuju menggunakan portal ini
                        untuk urusan komuniti Masjid Kariah.
                    </p>
                </div>
            </main>
        </div>
    );
}
