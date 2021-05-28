// import * as data from "sam-test-data";
// import { random, a, b} from "sam-test-data"
// console.log("hi rollup-best...");
// console.log(data.random(), data.a, data.b);
// export default {};

// import * as data from "./plugin";

// console.log(data.default.random(), data.default.a);

// export default data.default.random;

// 按需引入; 不打包 a和b; 实际上没有用到a 也会tree-shaking 掉
// import { random, a } from "./plugin";

// console.log(random());

// cjs
import { a, b } from "./cjs";

import pkg from "../package.json";
console.log(pkg);

const c = () => {
  return "c";
};
export default c;
