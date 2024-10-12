/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
      screens:{
        mid : "900px",
        vm: "390px"
      },
      // boxShadow:{
      //   sdw: "0px 12px 50px -18px #FFFFFF80" 
      // }
    },
  },
  plugins: [],
}

