/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
        },
        extend: {
            colors: {
                white: {
                    DEFAULT: '#ffffff',
                    'opacity-25': 'rgba(255, 255, 255, 0.25)',
                    'opacity-18': 'rgba(255, 255, 255, 0.18)',
                },
            },
            colorScheme: {
            },
            backgroundImage: {
                'login': "url('/images/login-bg.png')",
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [
    ]
}



/*
'btnBlue': '#162778',
'darkBlue': '#0a1236',
*/