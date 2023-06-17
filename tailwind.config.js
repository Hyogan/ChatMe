/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
      screens : {
        sl : '375px',
        sm : '480px',
        md : '768px',
        lg : '976px',
        xl : '1440px',
      },
    extend: {
      // Website colors
      colors : {
        brightRed : 'hsl(12,88%,59%)',
        brightRedLight : 'hsl(12,88%,69%)',
        brightRedSupLight : 'hsl(12,88%,95%)',
        darkBlue : 'hsl(228,39%,23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        paleRed: 'hsl(13, 70%, 80%)',
        varyLightGray: 'hsl(0, 0%, 98%)',
        blackSimple : 'hsl(0,0%,0%)',
        activeCheck : '#468669',
        conversation : "#333",
        conversationBlock : "#f7f7f7"
      },
      minWidth : {
        '1/2' : '50%',
      },
      //websites-sizes
      minHeight : {
        '1/2' : '50vh',
        '2/5' : '70vh',
      },
      boxShadow :{
        "3xl" : 'inset 0 32px 32px -32px rgb(0 0 0 / 5%) inset 0 -32px 32px -32px rgb(0 0 0 / 5%)',
        "4xl" : '0 0  32px rgb(0 0 0 / 8%) 0 16px 16px -16px rgb(0 0 0 / 10%)',
      },
    },
  },
  plugins: [],
}

