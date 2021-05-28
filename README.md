# rollup-best

工具库、组件库开发

### 为什么要用 rollp

- React 用 rollup 打包
- Vue 用 rollup 打包

### 开始

```javascript
npm init -y

yarn add rollup -D


```

- umd、cjs、es 区别

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
```

- tree-shaking 机制

- rollup external 属性
  > 有些场景下，虽然我们使用了 resolve 插件，但我们仍然某些库保持外部引用状态，这时我们就需要使用 external 属性，告诉 rollup.js 哪些是外部的类库，修改 rollup.js 的配置文件：

```javascript
external: ["vue"];
```

- commonjs 插件 rollup-plugin-commonjs

```
yarn add rollup-plugin-commonjs --dev
```

- rollup babel 插件

```javascript
yarn add rollup-plugin-babel --dev
```

- json 插件

```javascript
yarn add rollup-plugin-json --dev
```

- terser 插件(代码压缩)

```javascript
yarn add rollup-plugin-terser --dev
```
