module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'purple-blob': "url('svgs/blob.svg')",
       
      }),
      transitionProperty: {
        'visibility': 'visibility',
        
       }
    }
  },
  variants: {
    extend: {
      block: ['group-hover'],
      hidden: ['group-hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
