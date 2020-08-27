const webpack = require('webpack');
const path = require('path');

function getPlugin() {
    if(process.env.NODE_ENV === 'production') {
       return [
            new webpack.optimize.UglifyJsPlugin()
        ];
    } else {
        return [

        ];
    }
}

module.exports = {
    entry: {
        main: './src/index.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public/dist/')
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions:['.ts', '.tsx', '.js'],
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { 
                            minimize: true
                        }
                    },
                    'sass-loader?sourceMap'
                ]
            },
            {   
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: getPlugin()
};