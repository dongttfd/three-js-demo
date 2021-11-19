const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public/index.html', to: '' },
                { from: 'public/favicon.ico', to: '' },
            ],
        }),
    ],
    devServer: {
        static: __dirname + /dist/,
        // inline: true,
        host: '0.0.0.0',
        port: 8080,
    },
};
