const path = require("path");
// rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入
import resolve from "rollup-plugin-node-resolve";
// 将 CommonJS 模块转换为 ES6 供 rollup 处理
import commonjs from "rollup-plugin-commonjs";
// ES6 转 ES5，让我们可以使用 ES6 新特性来编写代码
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";

// 处理 vue 文件
const vuePlugin = require("rollup-plugin-vue");
// 处理css
const postcss = require("rollup-plugin-postcss");

const inputPath = path.resolve(__dirname, "./src/index.js");
const outputUmdPath = path.resolve(__dirname, "./dist/best.umd.js");
const outputEsPath = path.resolve(__dirname, "./dist/best.es.js");

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: "umd", // umd、cjs、es
      name: "Best",
      globals: {
        vue: "vue",
      },
    },
    {
      file: outputEsPath,
      format: "es",
    },
  ],
  plugins: [
    resolve(),
    vuePlugin(),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs(),
    json(),
    postcss({
      plugins: [],
    }),
  ],
  external: ["vue"],
};
