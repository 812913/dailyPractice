//const path=require('path');
const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports={
    devtool:'eval-source-map',//生成source maps，使调试更容易
    entry:'./src/main.js',//唯一入口文件，__dirname是node.js中的一个全局变量，它指向当前执行脚本所在目录
    output:{
        filename:"bundle.js",//打包后输出的文件的文件名
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
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
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
       new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
};

//console.log(__dirname);//c:\Users\15928\Desktop\Practice\dailyPractice\learnWebpack
//console.log(module.exports.output.path);//c:\Users\15928\Desktop\Practice\dailyPractice\learnWebpack/dist
//console.log(__dirname+'/src/index.tmpl.html');