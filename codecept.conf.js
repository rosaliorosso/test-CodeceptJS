exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'e2e',
  translation: 'ja-JP',
  plugins: {
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
    },
  }
}
