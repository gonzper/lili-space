import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#8A9A8D', // A cor verde-sálvia do design
      },
      fontFamily: {
        // Usa uma fonte serifada para os títulos e sans-serif para o resto, para se assemelhar ao original
        'serif': ['"Times New Roman"', 'serif'],
      },
      height: {
        '3/5': '60%', // Altura personalizada para a imagem
      },
    },
  },
  plugins: [],
}
export default config