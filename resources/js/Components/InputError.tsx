import { HTMLAttributes } from 'react';

export default function InputError({
    message,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p
            {...props}
            className={'text-sm font-semibold text-[#a53a32] ' + className}
        >
            {message}
        </p>
    ) : null;
}
