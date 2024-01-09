// // webpack.config.js
// module.exports = {
//   // ...
//   module: {
//     rules: [
//       // ...
//       {
//         test: /\.wasm$/,
//         type: "webassembly/experimental",
//       },
//     ],
//   },
//   experiments: {
//     asyncWebAssembly: true,
//   },
//   // ...
// };
const path = require("path");
module.exports = {
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.tsx",
  },
  mode: "development",
};
