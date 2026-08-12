import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-[100dvh] flex-col items-center bg-stone-100 px-4 py-10 dark:bg-stone-950 sm:justify-center">
            <Link href="/" className="mb-6 flex items-center gap-3 font-black text-emerald-950 dark:text-emerald-200"><span className="grid size-10 place-items-center rounded-full bg-emerald-800 text-white">M</span> Masjid Kariah</Link>
            <div className="w-full overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-xl shadow-emerald-950/10 dark:bg-stone-900 sm:max-w-md">
                {children}
            </div>
        </div>
    );
}
