import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
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
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;
