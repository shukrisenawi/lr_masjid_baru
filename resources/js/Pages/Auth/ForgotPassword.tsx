import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Lupa kata laluan" />

            <div className="mb-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                    Bantuan akaun
                </p>
                <h1 className="display-title mt-2 text-3xl font-semibold text-[var(--heading)]">
                    Lupa kata laluan?
                </h1>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    Masukkan e-mel akaun anda untuk menerima pautan tetapan
                    semula kata laluan.
                </p>
            </div>

            {status && (
                <div className="mb-5 rounded-xl bg-[var(--sage)] px-4 py-3 text-sm font-bold text-[var(--heading)]">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">
                <div className="space-y-2">
                    <InputLabel htmlFor="email" value="Alamat e-mel" />
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="flex justify-end pt-1">
                    <PrimaryButton className="w-full sm:w-auto" disabled={processing}>
                        {processing ? 'Sedang dihantar...' : 'Hantar pautan'}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
