const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "kvap2k",
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video)
          }
        }
      })
    },
  },
  
  
  env: {
    url: "https://www.amazon.in/",
  },
  setupNodeEvents(on, config) {
    specPattern: 'cypress/e2e/*.feature'

  },
},
)
