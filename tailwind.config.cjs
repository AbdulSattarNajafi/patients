/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '1.5rem',
                lg: '2rem',
            },
        },
        screens: {
            xs: '430px',
            sm: '607px',
            md: '816px',
            lg: '1055px',
            xl: '1263px',
            '2xl': '1504px',
        },
        extend: {
            colors: {
                primaryBtn: '#448DC9',
                primaryBtnHover: '#008dc9',
                primaryBlue: '#2D3779',
                overlay: 'rgba(0, 0, 0, 0.64)',
            },
            backgroundImage: {
                gradient: 'linear-gradient(90deg, #2E77B3 0%, #2D3779 100%);',
            },
            boxShadow: {
                'primary-btn-shadow': '0px 6px 50px rgba(68, 141, 201, 0.24)',
            },
        },
    },
    plugins: [],
};
