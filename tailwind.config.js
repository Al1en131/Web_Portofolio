import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                willow: ['Willow'],
                astral : ['Astral Studio'],
                joke : ['Tell Me A Joke'],
                creamy : ['Super Creamy'],
                SouthAustria : ['SouthAustriaDEMO'],
                TheHocaOutline : ['TheHoca-Outline'],
                TheHocaBold : ['TheHoca-Bold'],
                TheHoca : ['TheHoca'],
                Walker : ['WalkerDEMO'],
                KidsCute : ['KidsCute'],
                Gribble : ['Gribble'],
                Helvetica : ['Helvetica'],
                HelveticaNeueRoman : ['HelveticaNeueRoman'],
                HelveticaNeueThin : ['HelveticaNeueThin'],
                HelveticaNeueLight : ['HelveticaNeueLight'],
                Poppins : ['Poppins'],
                Oswald : ['Oswald'],
                Hand : ['Hand'],
                Didot : ['Didot']
            },
        },
    },

    plugins: [forms],
};
