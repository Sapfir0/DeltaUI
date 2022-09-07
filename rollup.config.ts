import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'

const isProduction = process.env.NODE_ENV === 'production'

const pkg = require('./package.json')

const plugins = [
  // Allow json resolution
  json(),
  // Compile TypeScript files
  typescript({
    tsconfig: 'tsconfig.json',
    tsconfigOverride: { compilerOptions: { emitDeclarationOnly: false } },
    objectHashIgnoreUnknownHack: true,
  }),
  copy({
    targets: [
      { src: 'public/icons', dest: 'dist' },
    ]
  }),
  // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
  commonjs({
    namedExports: {
      // https://github.com/rollup/rollup-plugin-commonjs#custom-named-exports
      'node_modules/react/index.js': [
        'useState',
        'useRef',
        'useEffect',
        'useCallback',
      ],
    },
  }),
  // Allow node_modules resolution, so you can use 'external' to control
  // which external modules to include in the bundle
  // https://github.com/rollup/rollup-plugin-node-resolve#usage
  resolve(),
  postcss({
    modules: true,
  }),
  terser({
    compress: {
      keep_infinity: true,
      pure_getters: true,
      passes: 10,
    },
    ecma: 2016,
    toplevel: false,
    format: {
      comments: 'all',
    },
  }),
]

if (!isProduction) {
  plugins.push(sourceMaps())
}

export default {
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      name: 'deltaui',
      format: 'umd',
      sourcemap: !isProduction,
      plugins: [terser()],
    },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: plugins,
}
