import path from "path";

import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import "webpack-dev-server";

const config: webpack.Configuration = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@app": path.resolve(__dirname, "src/app"),
            "@style": path.resolve(__dirname, "src/style"),
            "@assets": path.resolve(__dirname, "assets"),
            "@img": path.resolve(__dirname, "assets/img"),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                sideEffects: true
            },
            {
                test: /\.(png|jpg|svg)$/,
                type: "asset/resource"
            }
        ]
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Digital Portfolio",
        }),
        new MiniCssExtractPlugin()
    ],
    cache: false
};

export default config;
