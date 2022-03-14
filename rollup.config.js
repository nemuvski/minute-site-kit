import { resolve, join } from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

const BASE_PATH = resolve(__dirname, '.');
const INPUT_DIR_PATH = join(BASE_PATH, 'src');
const INPUT_JS_PATH = join(INPUT_DIR_PATH, 'index.js');
const INPUT_STYLES_DIR_PATH = join(INPUT_DIR_PATH, 'styles');
const OUTPUT_DIR_PATH = join(BASE_PATH, 'public');
const OUTPUT_CSS_PATH = join(OUTPUT_DIR_PATH, 'css', 'main.css');
const OUTPUT_JS_PATH = join(OUTPUT_DIR_PATH, 'js', 'main.js');

/** @type {import('rollup').RollupOptions} */
const options = {
  input: INPUT_JS_PATH,
  output: {
    file: OUTPUT_JS_PATH,
    format: 'iife',
    sourcemap: false,
    plugins: [],
  },
  plugins: [
    scss({
      output: OUTPUT_CSS_PATH,
      sourceMap: false,
      exclude: [],
      failOnError: true,
      processor: (css) => {
        return postcss([autoprefixer()])
          .process(css, { from: undefined })
          .then((result) => result.css);
      },
      watch: [INPUT_STYLES_DIR_PATH],
      verbose: true,
      outputStyle: 'compressed',
    }),
    terser(),
    nodeResolve({
      browser: true,
    }),
    commonjs({
      extensions: ['.js'],
    }),
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};

export default options;
