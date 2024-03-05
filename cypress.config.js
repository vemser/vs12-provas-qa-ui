const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
require('dotenv').config();


module.exports = defineConfig({
  env: {...process.env},
  chromeWebSecurity: false,
  e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      },
      "baseUrl":"http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front"
      // "baseUrl":"https://provas-front.vercel.app/"
  }
});
