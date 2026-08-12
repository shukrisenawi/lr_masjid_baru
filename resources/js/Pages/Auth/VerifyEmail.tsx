import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Pengesahan e-mel" />

            <div className="mb-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                    Satu langkah lagi
                </p>
                <h1 className="display-title mt-2 text-3xl font-semibold text-[var(--heading)]">
                    Sahkan alamat e-mel
                </h1>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    Klik pautan yang dihantar ke e-mel anda. Kami boleh menghantar
                    semula jika pautan belum diterima.
                </p>
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-5 rounded-xl bg-[var(--sage)] px-4 py-3 text-sm font-bold text-[var(--heading)]">
                    Pautan pengesahan baharu telah dihantar ke e-mel anda.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <PrimaryButton disabled={processing}>
                        {processing ? 'Sedang dihantar...' : 'Hantar semula'}
                    </PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="text-center text-sm font-extrabold text-[var(--ink-soft)] underline decoration-[var(--gold)] underline-offset-4"
                    >
                        Log keluar
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
