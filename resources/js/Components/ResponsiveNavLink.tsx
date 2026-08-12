import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? 'border-[var(--gold)] bg-[var(--sage)] text-[var(--heading)] focus:border-[var(--gold)]'
                    : 'border-transparent text-[var(--ink-soft)] hover:border-[var(--line)] hover:bg-[var(--surface)] hover:text-[var(--heading)] focus:border-[var(--gold)] focus:bg-[var(--surface)] focus:text-[var(--heading)]'
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
