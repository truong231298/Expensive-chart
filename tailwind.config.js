/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Softred': 'hsl(10, 79%, 65%)',
        'Cyan': 'hsl(186, 34%, 60%)',
        'Darkbrown': 'hsl(25, 47%, 15%)',
        'Mediumbrown': 'hsl(28, 10%, 53%)',
        'Cream': 'hsl(27, 66%, 92%)',
        'Verypaleorange': 'hsl(33, 100%, 98%)'
      }
    },
  },
  plugins: [],
}