var path=require("path");
var webpack=require("webpack");
module.exports={
    devtool:'cheap-module-eval-source-map',
    mode:'development',
    entry:['webpack-hot-middleware/client','./index.js'],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/static/'
    },
    module:{
        rules:[
            {
                test:/(\.js|\.jsx)$/,
                use:{
                    loader:"babel-loader"
                },
                exclude:/node_modules/,
               include:__dirname
            }
        ]
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),//用于经常使用的模块分配最小长度的ID
        new webpack.HotModuleReplacementPlugin()//用于热替换
    ]
}