import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

module.exports = {
  input: './src/apply-js-path-to-window.js',
  output: { dir: 'dist', format: 'iife' },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
