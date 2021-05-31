/**
 * rollup-plugin-node-resolve
 * 解决外部模块的依赖安装问题
 */

/**
 * 在命令行下直接运行 node ./src/index.js
 */
// const data = require("sam-test-data");
// console.log(data);
// console.log(data.random());
// module.exports = {};

/**
 * 运行 yarn build
 * 观察 dist/best.es.js
 * sam-test-data 代码已合并打包
 */
// import * as data from "sam-test-data";
// // import { random, a, b } from "sam-test-data"; // 解构
// // console.log(random());
// console.log("hi rollup-best...");
// console.log(data.random(), data.a, data.b);
// export default {};

/**
 * tree shaking 机制
 * yarn build 打包
 * 观察打包后文件
 * 打开example index.html 控制台观察
 */

/** 全部引入，不触发tree shaking
 * b 虽然没有被使用到，但还是被打包了
 */
// import * as data from "./plugin";
// console.log(data.default.random(), data.default.a);
// export default data.default.random;

/** 按需引入, 触发tree shaking
 * 不会打包 a和b; 实际上没有用到a 也会tree-shaking 掉
 */
// import { random, a } from "./plugin";
// console.log(random());

/**
 * rollup-plugin-commonjs
 * yarn build
 * 观察打包后的文件
 */
// import { a, b } from "./cjs";
// console.log("a:", a);

/**
 * rollup-plugin-json
 * 将 .json 文件当 一个模块引入
 * yarn build
 * node ./dist/best.umd.js 观察结果
 */

import pkg from "../package.json";
console.log(pkg);

/**
 * rollup-plugin-babel 插件
 * ES6 转 ES5，让我们可以使用 ES6 新特性来编写代码
 * ES6 箭头函数为例 yarn build 后 编译成ES5 匿名函数
 * 观察打包后的文件
 */
// const c = () => {
//   return "c";
// };
// export default c;

/**
 * vue 组件
 */
// import Test from "./vue/Test.vue";
// export default function (Vue) {
//   Vue.component(Test.name, Test);
// }
