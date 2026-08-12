import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Tetapkan semula kata laluan" />

            <div className="mb-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                    Keselamatan akaun
                </p>
                <h1 className="display-title mt-2 text-3xl font-semibold text-[var(--heading)]">
                    Kata laluan baharu
                </h1>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    Pilih kata laluan yang panjang dan tidak digunakan di tempat
                    lain.
                </p>
            </div>

            <form onSubmit={submit} className="space-y-5">
                <div className="space-y-2">
                    <InputLabel htmlFor="email" value="Alamat e-mel" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="password" value="Kata laluan baharu" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full"
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="space-y-2">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Sahkan kata laluan baharu"
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
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex justify-end pt-1">
                    <PrimaryButton className="w-full sm:w-auto" disabled={processing}>
                        {processing ? 'Sedang disimpan...' : 'Simpan kata laluan'}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
