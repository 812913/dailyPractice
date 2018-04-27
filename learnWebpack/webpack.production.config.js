//const path=require('path');
const webpack=require("webpack");
const config=require("config");
const minimize=require('minimize');
const HtmlWebpackPlugin=require("html-webpack-plugin");
const ExtractTextPlugin=require("extract-text-webpack-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin");

module.exports={
    devtool:'null',//注意，这能大大压缩我们的打包代码
    entry:'./src/main.js',//唯一入口文件，__dirname是node.js中的一个全局变量，它指向当前执行脚本所在目录
    output:{
        filename:"bundle-[hash].js",//打包后输出的文件的文件名
        path:__dirname+'/build'//打包后的文件存放的地方
    },
    devServer:{
        contentBase:"./dist",
        port:8080,//默认监听端口
        inline:true,//源文件改变时，自动刷新页面
        historyApiFallback:true,//开发单页面时非常有用。如果设置为true，所有的跳转将指向index.html
        hot:true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            // {
            //     test:/\.scss\$/,
            //     use:{
            //         loader:'sass-loader'
            //     }
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"//将js字符串生成style节点
                    }, {
                        loader: "css-loader",//将css转化为CommonJS模块
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
       new webpack.HotModuleReplacementPlugin(),//热加载插件
       new webpack.optimize.OccurrenceOrderPlugin(),
       new webpack.LoaderOptionsPlugin({
            minimize:true
       }),
       new ExtractTextPlugin('style.css'),
       new CleanWebpackPlugin('build/*.*',{
           root:__dirname,
           verbose:true,
           dry:false
       })
    ],
};