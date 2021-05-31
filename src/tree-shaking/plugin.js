/** 不触发 tree-shaking 的写法 */
// const a = 1;
// const b = 2;
// function random() {
//   console.log("random");
// }

// export default {
//   a,
//   b,
//   random,
// };

/** 触发 tree-shaking的写法 */
export const a = 1;
export const b = 2;
export function random() {
  console.log("random");
}
