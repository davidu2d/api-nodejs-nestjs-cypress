/// <reference types="cypress" />
/// <reference types= "@shelex/cypress-allure-plugin" />
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
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (on, config) => {

    //const options = browserify.defaultOptions;

    //options.browserifyOptions.plugin.unshift(['tsify']);

    const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),
      };

    on('file:preprocessor', cucumber(options))

    allureWriter(on, config);

    return config;
}