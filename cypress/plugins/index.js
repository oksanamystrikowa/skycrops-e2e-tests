/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
const path = require("path");
const gmail = require("gmail-tester");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // ...

  on("task", {
    "gmail:check": async args => {
      const { from, to, subject } = args;
      try {
        const email = await gmail.check_inbox(
          path.resolve(__dirname, "../../google_credentials.json"),
          path.resolve(__dirname, "../../google_token.json"),
          {
            subject,
            from,
            to,
            wait_time_sec: 10,
            max_wait_time_sec: 30,
            include_body: true
          }
        );

        return email;

      } catch (err) {
        console.log('err', err)
      }
    }
  });
};