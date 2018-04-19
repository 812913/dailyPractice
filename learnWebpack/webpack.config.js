module.export={
    entry:__dirname+"/app/main.js",//唯一入口文件，__dirname是node.js中的一个全局变量，它指向当前执行脚本所在目录
    output:{
        path:__dirname+"/public",//打包后的文件存放的地方
        filename:"bundle.js"//打包后输出的文件的文件名
    }
};