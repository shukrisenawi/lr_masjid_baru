import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M9 41V22.5C9 14.49 15.49 8 23.5 8S38 14.49 38 22.5V41"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
            />
            <path
                d="M16 41V24.5C16 20.36 19.36 17 23.5 17S31 20.36 31 24.5V41"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
            />
            <path d="M5 41H43" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M23.5 4V8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
    );
}
