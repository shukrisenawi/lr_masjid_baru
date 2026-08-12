import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        address: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Daftar kariah" />

            <div className="mb-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                    Keahlian keluarga
                </p>
                <h1 className="display-title mt-2 text-3xl font-semibold text-[var(--heading)]">
                    Daftar sebagai anak kariah
                </h1>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    Permohonan akan disemak oleh pihak masjid sebelum diaktifkan.
                </p>
            </div>

            <form onSubmit={submit} className="space-y-5">
                <div className="space-y-2">
                    <InputLabel htmlFor="name" value="Nama penuh" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="phone" value="Nombor telefon" />

                    <TextInput
                        id="phone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        className="block w-full"
                        autoComplete="tel"
                        placeholder="+60123456789"
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="address" value="Alamat rumah dalam kariah" />

                    <textarea
                        id="address"
                        name="address"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                        className="form-field block w-full resize-none"
                        rows={3}
                        required
                    />

                    <InputError message={errors.address} className="mt-2" />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="password" value="Kata laluan" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="space-y-2">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Sahkan kata laluan"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        href={route('login')}
                        className="text-center text-sm font-extrabold text-[var(--primary)] underline decoration-[var(--gold)] underline-offset-4"
                    >
                        Sudah ada akaun?
                    </Link>

                    <PrimaryButton className="w-full sm:w-auto" disabled={processing}>
                        {processing ? 'Sedang dihantar...' : 'Hantar pendaftaran'}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
