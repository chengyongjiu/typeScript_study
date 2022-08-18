const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.ts", // 指定入口文件
  // entry:path.resolve(__dirname, 'app'), //指定入口文件
  output: {
    // 指定打包后文件
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".wasm"], // 导入文件的后缀名他自己去添加
  },
  stats: "errors-only",
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: [{
          loader: "ts-loader",
        }, ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif|ico)$/,
        type: "asset",
        //解析
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'img/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath: './'
        },
      },
    ],
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map", // 是否生成文件地图
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist")
    },
    client: {
      logging: "error",
      progress: true,
    },
    hot: true,
    open: true,
    compress: false,
    host: "localhost",
    port: 'auto',
  },
  plugins: [
    // 打包清理之前的打包文件
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
      filename: "index.html",
      title:'webpack5的项目配置',
      inject: "body"
    }),
    
  ],
};