/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const fs = require("fs");

export const config: Cypress.ConfigOptions = {
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    fixturesFolder: "./src/component-tests",
    setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");
      getCompareSnapshotsPlugin(on, config);
      on('before:browser:launch', (_browser, launchActions) => {
        launchActions.preferences.width = 1600;
        launchActions.preferences.height = 1080;
        return launchActions;
      });
      config.browsers = config.browsers.filter((b) => b.name == 'electron')
      return config;
    },
    supportFile: "./cypress/support/index.ts",
    retries: 3,
  },
  e2e: {
    baseUrl: "http://localhost:6007/",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (_browser, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });

      // on("task", {
      //   lighthouse: lighthouse((lighthouseReport) => {
      //     console.log("---- Writing lighthouse report to disk ----");
    
      //     fs.writeFile("lighthouse.html", lighthouseReport.report, (error: any) => {
      //       error ? console.log(error) : console.log("Report created successfully");
      //     });
      //   }),
      // });

      config.browsers = config.browsers.filter((b) => b.name == 'chrome')
      return config;
    },
  },
}

export default defineConfig(config);
