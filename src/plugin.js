// 没有触发 tree-shaking
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

// 触发 tree-shaking； 不建议写export default {}

export const a = 1;
export const b = 2;
export function random() {
  console.log("random");
}
