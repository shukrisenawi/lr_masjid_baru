import { InputHTMLAttributes } from 'react';

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'size-5 rounded border-[#789089] text-[#123f35] shadow-none focus:ring-[#c89b3c] focus:ring-offset-[#f8f5ed] ' +
                className
            }
        />
    );
}
