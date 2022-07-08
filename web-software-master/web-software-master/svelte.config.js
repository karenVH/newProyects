const preprocess = require('svelte-preprocess');

module.exports = {
  preprocess: preprocess({
    scss: {
      prependData: `@import 'src/scss/variables.scss';`,
    },
  }),
};
