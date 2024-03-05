const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      },
      "baseUrl":"http://vemser-dbc.dbccompany.com.br:39000/vemser/vs12-provas-front"
  }
});