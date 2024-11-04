import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { withUt } from "uploadthing/tw";

export default withUt({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      fontSize: {
        'obese': '96px'
      },
      backgroundImage: {
        'him': "url('https://mhs-cte.weebly.com/uploads/1/2/1/9/121936271/published/sta-sta-hanagami-blaise.jpg?1571943510')",
      },
      animation:{
        'shook': '1s linear infinite',
      },
      keyframes: {
        'shook' : {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'},
          '20%, 80%' : {
            transform: 'translate3d(2px, 0, 0)'},
          '30%, 50%, 70%': { 
            transform: 'translate3d(-4px, 0, 0)'},
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'},
        },
      },
    },
  },
  plugins: [
    require('daisyui'), require('@tailwindcss/typography'),
  ],
}) satisfies Config;
