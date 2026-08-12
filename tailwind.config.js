import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
                display: ['Lora', ...defaultTheme.fontFamily.serif],
            },
            boxShadow: {
                soft: '0 18px 50px -24px rgba(17, 54, 45, 0.35)',
                lift: '0 24px 60px -28px rgba(17, 54, 45, 0.45)',
            },
        },
    },

    plugins: [forms],
};
