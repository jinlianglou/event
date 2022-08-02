
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/event.js',
  output: [
    {
      file: 'dist/event.umd.js',
      format: 'umd',
      name: 'event'
    },
    {
      file: 'dist/event.iife.js',
      format: 'iife',
      name: 'event',
    },
    {
      file: 'dist/event.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
};