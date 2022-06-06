module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'ibm_plex': ['IBM Plex Sans', 'sans-serif'],
        'ibm_mono': ['IBM Plex Mono', 'sans-serif']
      }
    },
  },
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ]
}
