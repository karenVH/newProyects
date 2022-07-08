import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import preprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      );

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: preprocess({
        scss: {
          prependData: `@import 'src/scss/variables.scss';`,
        },
      }),
      compilerOptions: {
        hydratable: true,
        dev: !production,
      },
    }),
    css({ output: 'bundle.css' }),

    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    !production && serve(),

    !production && livereload('public'),

    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
