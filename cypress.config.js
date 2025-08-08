const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // plugins/events
    },
    // baseUrl removed since we don't have a local server
    supportFile: "cypress/support/e2e.js",
  },
});
