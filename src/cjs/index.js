// cjs 模块 不会触发tree-shaking
// const a = 1;
// const b = 2;
// module.exports = {
//   a,
//   b,
// };

// cjs 模块的 tree-shaking
exports.a = 1;
exports.b = 2;
