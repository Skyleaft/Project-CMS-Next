const withPWA = require("next-pwa");

const path = require('path')
require('dotenv').config()

module.exports = withPWA({
  pwa: {
    disable:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "preview" ||
      process.env.NODE_ENV === "production",
      // delete two lines above to enable PWA in production deployment
      // add your own icons to public/manifest.json 
      // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
    dest: "public",
    register: true,
  },
  target: "serverless",

  env: {
    API_URL: process.env.API_URL
  },
  publicRuntimeConfig: {
      API_URL: process.env.API_URL,
  },

  webpack: config => {
      // config.resolve.alias['components'] = path.join(__dirname, 'components')
      config.resolve.alias['public'] = path.join(__dirname, 'public')

      return config
  }
});
