import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login({
    status,
}: {
    status?: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        phone: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log masuk" />

            <div className="mb-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                    Selamat kembali
                </p>
                <h1 className="display-title mt-2 text-3xl font-semibold text-[var(--heading)]">
                    Log masuk ke portal
                </h1>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    Gunakan nombor telefon yang didaftarkan dengan pihak masjid.
                </p>
            </div>

            {status && (
                <div className="mb-5 rounded-xl border border-[var(--primary)]/20 bg-[var(--sage)] px-4 py-3 text-sm font-bold text-[var(--heading)]">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">
                <div className="space-y-2">
                    <InputLabel htmlFor="phone" value="Nombor telefon" />

                    <TextInput
                        id="phone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        className="block w-full"
                        placeholder="+60123456789"
                        autoComplete="tel"
                        isFocused={true}
                        onChange={(e) => setData('phone', e.target.value)}
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="password" value="Kata laluan" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block">
                    <label htmlFor="remember" className="flex w-fit items-center">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData(
                                    'remember',
                                    (e.target.checked || false) as false,
                                )
                            }
                        />
                        <span className="ms-2 text-sm font-semibold text-[var(--ink-soft)]">
                            Ingat saya
                        </span>
                    </label>
                </div>

                <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        href={route('register')}
                        className="text-center text-sm font-extrabold text-[var(--primary)] underline decoration-[var(--gold)] underline-offset-4"
                    >
                        Daftar kariah
                    </Link>
                    <PrimaryButton className="w-full sm:w-auto" disabled={processing}>
                        {processing ? 'Sedang masuk...' : 'Log masuk'}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
