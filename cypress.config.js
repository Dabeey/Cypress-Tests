const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // plugins/events
    },
    // baseUrl removed since we don't have a local server
    supportFile: "cypress/support/e2e.js",
  },
});
