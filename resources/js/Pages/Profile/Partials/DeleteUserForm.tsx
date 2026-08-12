import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

export default function DeleteUserForm({
    className = '',
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="display-title text-2xl font-semibold text-[var(--danger)]">
                    Padam akaun
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--ink-soft)]">
                    Tindakan ini memadam akses portal anda secara kekal. Hubungi
                    pihak masjid terlebih dahulu jika anda hanya mahu mengemas
                    kini status keahlian.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Padam akaun saya
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-5 sm:p-7">
                    <h2 className="display-title text-2xl font-semibold text-[var(--heading)]">
                        Anda pasti mahu memadam akaun?
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                        Masukkan kata laluan untuk mengesahkan tindakan ini. Data
                        yang dipadam tidak dapat dipulihkan melalui portal.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Kata laluan"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-2 block w-full"
                            isFocused
                            placeholder="Masukkan kata laluan"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Batal
                        </SecondaryButton>

                        <DangerButton disabled={processing}>
                            {processing ? 'Sedang dipadam...' : 'Padam akaun'}
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
