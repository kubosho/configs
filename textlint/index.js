module.exports = {
  filters: {
    comments: true,
  },
  rules: {
    'ja-no-weak-phrase': true,
    'no-dead-link': {
      checkRelative: true,
      baseURI: null,
      ignore: [],
      preferGET: [],
      ignoreRedirects: false,
    },
    'no-doubled-joshi': {
      min_interval: 1,
      strict: false,
      allow: [],
    },
    'preset-ai-writing': true,
    'preset-jtf-style': true,
  },
};
