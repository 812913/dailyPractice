const webpack=require("webpack");
const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/main.jsx",
    output:{
        path:__dirname+"/build",
        filename:"bundle.js"
    },
    devtool:"eval-source-map",
    mode:"development",
    devServer:{
        contentBase:"./build",
        port:"8080",
        inline:true,
        historyApiFallback:true,
        hot:true
    },
    module:{
        rules:[{
            test:/(\.jsx|\.js)$/,
            use:{
                loader:"babel-loader",
            },
            exclude:/node-modules/
        },{
            test:/\.css$/,
            use:[
                {
                    loader:"style-loader",
                },
                {
                    loader:"css-loader",
                    options:{
                        modules:true,
                        localIdentName:'[name]__[local]--[hash:base64:5]'
                    }
                },
                {
                    loader:"postcss-loader"
                }
            ]
        },{
            test:/\.(png|jpg)$/,
            use:[{
                loader:"url-loader",
                options:{
                    limit:8192
                }
            }]
        }
        ]
    },
    plugins:[
        new webpack.BannerPlugin("版权所有，翻版必究"),
        new htmlWebpackPlugin({
            template:__dirname+"/src/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

//console.log(__dirname);//c:\Users\15928\Desktop\Practice\dailyPractice\learnReact