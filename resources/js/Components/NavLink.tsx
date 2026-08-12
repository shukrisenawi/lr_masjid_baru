import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-[var(--gold)] text-[var(--heading)] focus:border-[var(--gold)]'
                    : 'border-transparent text-[var(--ink-soft)] hover:border-[var(--line)] hover:text-[var(--heading)] focus:border-[var(--gold)] focus:text-[var(--heading)]') +
                className
            }
        >
            {children}
        </Link>
    );
}
