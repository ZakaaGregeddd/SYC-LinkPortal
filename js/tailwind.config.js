tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        maroon: {
                            950: '#1a040b',
                            900: '#2b0b16',
                            850: '#3a0f1e',
                            800: '#4a1525',
                            700: '#6b1d38',
                            600: '#8c2447',
                            500: '#ad2b56',
                        },
                        gold: {
                            100: '#fef3c7',
                            200: '#fde68a',
                            300: '#fcd34d',
                            400: '#fbbf24',
                            500: '#f59e0b',
                            600: '#d97706',
                        },
                        parchment: '#fefaf6',
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        serif: ['"Playfair Display"', 'serif'],
                        cinzel: ['"Cinzel"', 'serif'],
                        script: ['"Great Vibes"', 'cursive'],
                    },
                    boxShadow: {
                        'glow-gold': '0 0 25px -4px rgba(245, 158, 11, 0.45)',
                        'glow-maroon': '0 0 35px -5px rgba(107, 29, 56, 0.65)',
                        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
                    },
                    animation: {
                        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 4s ease-in-out infinite',
                        'shimmer': 'shimmer 2.5s infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-6px)' },
                        },
                        shimmer: {
                            '100%': { transform: 'translateX(100%)' },
                        }
                    }
                }
            }
        }