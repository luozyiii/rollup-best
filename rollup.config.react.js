const path = require('path');
// rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入
import resolve from 'rollup-plugin-node-resolve';
// 将 CommonJS 模块转换为 ES6 供 rollup 处理
import commonjs from 'rollup-plugin-commonjs';
// ES6 转 ES5，让我们可以使用 ES6 新特性来编写代码
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

// 处理css
const postcss = require('rollup-plugin-postcss');

// 压缩 js 代码，包括 ES6 代码压缩、删除注释
import { terser } from 'rollup-plugin-terser';

const inputPath = path.resolve(__dirname, './src/index.react.js');
const outputUmdPath = path.resolve(__dirname, './dist/react/best.umd.js');
const outputEsPath = path.resolve(__dirname, './dist/react/best.es.js');

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd', // umd、cjs、es
      name: 'ReactBest',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: outputEsPath,
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    json(),
    postcss({
      plugins: [],
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
