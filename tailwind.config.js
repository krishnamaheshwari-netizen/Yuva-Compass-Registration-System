
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2490ef',
          dark: '#1976d2',
          light: '#e3f2fd'
        },
        frappe: {
          sidebar: '#2e3338',
          'sidebar-hover': '#3a4149',
          text: '#36414c',
          'text-muted': '#6c7680',
          border: '#d1d8dd',
          bg: '#f5f6fa'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
}
