const path = require("path");

module.exports = {
    entry: {
        index: "./src/widgets/richtext/richtext.jsx",
        card: "./src/widgets/card/card.jsx",
    },
    output: {
        filename: "[name]/[name].js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", // cria estilos a partir das strings de CSS injetadas no DOM
                    "css-loader", // interpreta CSS e resolve importações url() 
                    "sass-loader", // compila Sass em CSS
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
          directory: './dist'
        },
        port: 8080,
        open: false
    },
    watch: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000, // verifique se há alterações a cada segundo
    },
    
};
