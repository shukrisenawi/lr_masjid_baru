import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Sahkan kata laluan" />

            <div className="mb-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--gold-text)]">
                    Kawasan selamat
                </p>
                <h1 className="display-title mt-2 text-3xl font-semibold text-[var(--heading)]">
                    Sahkan kata laluan
                </h1>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    Masukkan kata laluan semasa sebelum meneruskan tindakan
                    sensitif ini.
                </p>
            </div>

            <form onSubmit={submit} className="space-y-5">
                <div className="space-y-2">
                    <InputLabel htmlFor="password" value="Kata laluan" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex justify-end pt-1">
                    <PrimaryButton className="w-full sm:w-auto" disabled={processing}>
                        {processing ? 'Mengesahkan...' : 'Sahkan'}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
