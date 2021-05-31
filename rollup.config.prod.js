const path = require("path");
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";

// 压缩 js 代码，包括 ES6 代码压缩
import { terser } from "rollup-plugin-terser";

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
    },
    {
      file: outputEsPath,
      format: "es",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
    }),
    json(),
    terser(),
  ],
  external: ["vue", "sam-test-data"],
};
