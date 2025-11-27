const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ss8p1a",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
