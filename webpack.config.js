//webpack必须采用commonjs写法
let path = require('path');//专门处理路径用的，以当前路径解析出一个相对路径path为nodejs的内置模块
console.log(path.resolve('./dist'));
let HtmlWebpackPlugin = require('html-webpack-plugin');

//打包一个文件
module.exports = {
    entry:'./src/main.js',  //打包的入口文件，webpack会自动找相关的依赖进行打包
    output:{
        filename:'bundle.js',//打包后的名字
        path:path.resolve('./dist') //必须是一个绝对路径
    },
    //模块的解析规则
    //-js 匹配所有的js 用babel-loader转译 排除掉node_modules
    module:{
        rules:[
            // {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //use时从右往左写
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //图片只在8192字节以下的才转化为base64，其它情况下输出图片
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({  //自动插入到dist目录中
            template:'./src/index.html',  //使用的模板
            filename:'login.html'    //产出的文件路径
        })
    ]
}

//打包多个文件
// module.exports = {
//     entry:{
//         main:'./src/main.js',
//         main1:'./src/main1.js'
//     },  //打包的入口文件，webpack会自动找相关的依赖进行打包
//     output:{
//         filename:'[name].js',//打包后的名字
//         path:path.resolve('./dist') //必须是一个绝对路径
//     }
// }