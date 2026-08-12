import { ButtonHTMLAttributes } from 'react';

export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-xl border border-[#a53a32]/20 bg-[#a53a32] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#842e28] active:translate-y-px disabled:cursor-not-allowed ${
                    disabled && 'opacity-50'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
