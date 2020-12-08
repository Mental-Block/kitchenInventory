const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    resolve: {
        alias: {
            root: path.resolve(__dirname, "./src"),
        },
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve("./public"),
        proxy: {
            "/api/**": {
                target: "http://localhost:5000/",
                pathRewrite: { "^/api": "" },
                secure: false,
                changeOrigin: true,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                sideEffects: true
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.html$/,
                loader: ["html-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};
