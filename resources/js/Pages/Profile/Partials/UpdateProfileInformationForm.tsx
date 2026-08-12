import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function UpdateProfileInformation({
    className = '',
}: {
    className?: string;
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            phone: user.phone,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="display-title text-2xl font-semibold text-[var(--heading)]">
                    Maklumat profil
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    Kemas kini nama dan nombor telefon untuk urusan masjid.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-5">
                <div className="space-y-2">
                    <InputLabel htmlFor="name" value="Nama penuh" />

                    <TextInput
                        id="name"
                        className="block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="phone" value="Nombor telefon" />

                    <TextInput
                        id="phone"
                        type="tel"
                        className="block w-full"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                        autoComplete="tel"
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                    <PrimaryButton disabled={processing}>
                        {processing ? 'Menyimpan...' : 'Simpan perubahan'}
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm font-bold text-[var(--primary)]">Perubahan disimpan.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
