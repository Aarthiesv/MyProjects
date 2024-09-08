const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Use presets for modern JS and React
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve both .js and .jsx extensions
  },
  devServer: {
    static: "./dist", // Serve files from the dist folder
  },
  mode: "development", // Set the mode to development
};
