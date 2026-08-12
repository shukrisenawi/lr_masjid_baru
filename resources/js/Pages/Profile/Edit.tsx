import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Cog6ToothIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit() {
    return (
        <AuthenticatedLayout>
            <Head title="Profil">
                <meta
                    name="description"
                    content="Kemas kini profil, nombor telefon dan keselamatan akaun Masjid Kariah."
                />
            </Head>

            <div className="mx-auto max-w-5xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
                <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--heading)]">
                        <Cog6ToothIcon className="size-6" />
                    </span>
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                            Tetapan akaun
                        </p>
                        <h1 className="display-title mt-1 text-3xl font-semibold text-[var(--heading)] sm:text-4xl">
                            Profil & keselamatan
                        </h1>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--ink-soft)]">
                            Pastikan maklumat hubungan anda tepat untuk urusan
                            masjid dan notifikasi penting.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[14rem_1fr] lg:gap-8">
                    <aside className="hidden lg:block">
                        <nav className="sticky top-8 space-y-1.5" aria-label="Bahagian profil">
                            <a
                                href="#maklumat"
                                className="flex items-center gap-3 rounded-xl bg-[var(--sage)] px-4 py-3 text-sm font-extrabold text-[var(--heading)]"
                            >
                                <UserCircleIcon className="size-5" />
                                Maklumat profil
                            </a>
                            <a
                                href="#keselamatan"
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-[var(--ink-soft)] transition hover:bg-[var(--surface)] hover:text-[var(--heading)]"
                            >
                                <LockClosedIcon className="size-5" />
                                Keselamatan
                            </a>
                        </nav>
                    </aside>

                    <div className="space-y-5">
                        <div id="maklumat" className="surface-card p-5 sm:p-7">
                            <UpdateProfileInformationForm />
                        </div>

                        <div id="keselamatan" className="surface-card p-5 sm:p-7">
                            <UpdatePasswordForm />
                        </div>

                        <div className="rounded-2xl border border-[#a53a32]/20 bg-[#a53a32]/[0.06] p-5 sm:p-7">
                            <DeleteUserForm />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
