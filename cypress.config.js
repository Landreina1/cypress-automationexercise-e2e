import { defineConfig } from "cypress";
import cypressMochawesomeReporter from 'cypress-mochawesome-reporter/plugin';


export default defineConfig({
  

  e2e: {
     allowCypressEnv: false,
     setupNodeEvents(on, config) {
     cypressMochawesomeReporter(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reporDir: 'cypress/reporter',
      overwrite: true,
      charts: true,
      embeddedScreenshots: true,
      html: true,
      json: false,
      reporPageTitle: 'Prueba cypress',
      inlineAssets: true,


    }
  },
});
