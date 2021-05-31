# rollup-best

工具库、组件库开发

### 为什么要用 rollp

- React 用 rollup 打包
- Vue 用 rollup 打包

### 与 webpack 区别

- rollup
  简洁的 API，易上手;  
  天生的 Tree-shaking，自动删除冗余代码;  
  支持多模块导出;  
  能快速打出体积更小的 bundle;  
  适合打包类、库；

- webpack
  丰富的插件系统;  
  代码分割和静态资源导入;  
  热模块更新;  
  适合项目级应用;

### 开始

```javascript
npm init -y // package.json 初始化

yarn add rollup -D

```

- umd、cjs、es 区别

umd：希望提供一个前后端跨平台的解决方案(支持 AMD 与 CommonJS 模块方式)  
实现原理：  
先判断是否支持 Node.js 模块格式（exports 是否存在），存在则使用 Node.js 模块格式。  
再判断是否支持 AMD（define 是否存在），存在则使用 AMD 方式加载模块。  
前两个都不存在，则将模块公开到全局（window 或 global）。

```javascript
// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
})(this, function () {
  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {};
});
```

cjs(CommonJS)：Node.js 中模块的事实标准是 CommonJS。 CommonJS 模块在普通的 .js 文件中用 module.exports 进行定义，然后可以用 require() 函数在其他 .js 文件中使用

```javascript
// foo.js
module.exports = function () {
  return 'Hello foo!';
};

// index.js
var foo = require('./foo');
console.log(foo()); // Hello foo!
```

ES 模块

```javascript
// foo.mjs
export function foo() {
  return 'Hello foo!';
}

// index.mjs
import { foo } from './foo.mjs';
console.log(foo()); // Hello foo!
```

### 使用.prettierrc.js 格式化代码

> prettierrc + vscode 自定义工作区 保持代码风格的一致

### rollup 插件

- rollup-plugin-node-resolve
  > 解决外部模块的依赖安装问题

```javascript
yarn add rollup-plugin-node-resolve -D

// 安装测试 npm 包 sam-test-data
yarn add sam-test-data -D

```

- babel
  > 将 ES6 的代码转化成 ES5

```javascript
yarn add @babel/node --dev
yarn add @babel/core --dev
yarn add @babel/preset-env --dev

// .babelrc 配置
{
  "presets": [["@babel/env"]]
}
```

- rollup babel 插件
  > ES6 转 ES5，让我们可以使用 ES6 新特性来编写代码

```javascript
yarn add rollup-plugin-babel --dev

// ES6 箭头函数
const c = () => {
  return "c";
};
export default c;
```

- tree-shaking 机制

- rollup external 属性
  > 有些场景下，虽然我们使用了 resolve 插件，但我们仍然某些库保持外部引用状态，这时我们就需要使用 external 属性，告诉 rollup.js 哪些是外部的类库，修改 rollup.js 的配置文件：

```javascript
external: ['vue'];
```

- commonjs 插件 rollup-plugin-commonjs
  > rollup.js 默认不支持 CommonJS 模块，这里我编写了一个 cjs.js CommonJS 模块用于测试。

```
yarn add rollup-plugin-commonjs --dev
```

- json 插件

```javascript
yarn add rollup-plugin-json --dev
```

- terser 插件(代码压缩)

```javascript
yarn add rollup-plugin-terser --dev
```

### vue 组件编译

> 支持 vue 3

```javascript
yarn add rollup-plugin-vue -D
yarn add @vue/compiler-sfc -D
yarn add @vue/babel-preset-jsx -D
// css
yarn add postcss rollup-plugin-postcss -D
yarn add sass -D
```

- 在 html 直接引用报错

```javascript
: Cannot read property 'withScopeId' of undefined

// 在生成的文件 best.umd.js 找到 global.vue  将vue 改成大写 global.Vue

// 最终解决方案 rollup.config.dev.js
globals: {
  vue: "Vue",
},
```

### react 组件

```javascript
// babel 支持jsx
yarn add @babel/preset-react -D

// 支持 less
yarn add less -D

// .babelrc 配置
{
  "presets": ["@babel/preset-react", "@babel/env"],
  "plugins": ["@babel/plugin-transform-react-jsx"]
}

// rollup.config.js
globals: {
  react: "React",
  "react-dom": "ReactDOM",
},

// 剔除打包的库
external: ["react", "react-dom"],

// 在html 上引用
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>

<div id="app"></div>
<script src="../dist/react/best.umd.js"></script>

```

### 配置文件拆分

```javascript
// 基础配置文件
rollup.config.dev.js;
rollup.config.prod.js;

// react 配置文件
rollup.config.react.js;

// vue 配置文件
rollup.config.vue.js;
```

### 如何查看例子

> 借助 npm 包 serve 构建服务器环境

```javascript
// 全局安装serve
npm install -g serve

serve ./
```
