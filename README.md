## vue(view)就一套构建用户界面的（渐进式框架）https://cn.vuejs.org/
## vue 数据驱动(主要操作数据)
- 操作dom
## JS 数据类型
- 基本  number  string boolean null(空) undefined(没有)
- Object function()
- Symbol(es6)
## 重要数据类型｛｝  []    前后端交互一般都是给JSON字符串
- 对象(属性、方法)
- []数组
## 数组的变异（括号中的能改变原数组）
- 操作数组的方法  
 (pop  push  unshift  shift  splice  reverse(把原数组倒序) sort(把原数组升序) ) 
 indexOf  lastIndexof  concat(拼数组)  slice(返回新数组)
- 用得比较多的方法 
  es5   forEach(循环没有返回值，遍历完数组) filter(过滤)  map(映射)  some   every   reduce
  es6  （includes find ）

  npm install vue axios bootstrap


## 环境介绍
- IDE ( webstrom、vscode)
- Npm (Vue-cli、webpack   cnpm  nvm)
- Chrome (Vue调试插件Vue.js devtools)
- visual Studio Code(Debug-startDebug快捷键F5)

## 认识介绍
- 第一个demo (声明式渲染  条件渲染  列表   事件)
- 热部署 (gulp webpack)
- 样式 (Sass   postcss)
- 前置知识 (代码规范-eslint  学习资料-官网社区)

## 基本概念
- 模版语法 
- 计算属性
- 指令 (class,style绑定  条件渲染  列表渲染   事件处理   表单输入绑定)
- 组件基础 (生命周期   模块化的思想)

## 组件
- 组件通信方式 (props    $parent    emit event    Vuex)
- 动画
- Vue-router
- Vue-resource   Axios

## 常用API
- vue.use
- props
- DOM(el  template   render)

## 部署
- 服务器端渲染
- 打包编译

## 框架和库
- 框架 vue 拥有完整的解决方案，我们写好人家调用我
- 库  jquery underscore zepto animate.css   我们调用他

## 渐进式  (渐进增强)
- vue全家桶 vue.js + vue-router(完成单页面运用) + vuex(组件化开发) + axios(获取数据类ajax)
- 通过组合 完成一个完整的框架

## 渐进式的理解
- 声明式渲染 Declarative Rendering（无需关心如何实现,可以用就行）
- 组件系统Component System （页面庞大，复用性大）
- 客户端路由Client-side Routing（vue-router）多页开发跳转
- 大规模状态管理Large Scale State Management（vuex）数据方便管理
- 构建工具Build System（vue-cli）es6转es5、代码的压缩合并 sass 上线，生产文件，路径前缀  webpact打包工具

## Vue的两个核心点
- 响应的数据变化（当数据发生改变 -> 试图的自动更新
- 组合的视图组件（UI页面映射为组件树   划分组件可维护、可复用、可测试）

## MVC（bakbone)单向绑定
- Model数据模型
- view视图
- controller 控制器

## MVVM模式（angular,vue）双向绑定
- Model数据模型  Plain JavaScript Objects计划好的js对象
- view视图模板  DOM
- view-Model视图模型  （vue) DOM LIsteners和Data Bindings

## Object.defineProperty(es5)的没有替代方案
- 不支持ie8以下

## 安装vue
- cdn的方式
- npm安装 node package manager
   ```
   npm init
   npm init -y
   npm install vue
   ```
   > 初始化会产生一个package.json的文件，文件用来描述项目的依赖，不能用大写 特殊字符 中文,而且不要和安装的包的名字相同

## vue 第二天
- 初始化webpack    npm init   npm init -y(可以不用不停的打yes)
- vm => viewModel 数据最终都会被vm所代理
- {{a}}  取值表达式，通过{{}}来进行取值,默认可以不写this，表达式  赋值运算  计算 三元表达式  尽量在{{}}里面少写逻辑 可以用（ computed）

### 指令
- dom元素的行间属性，vue提供了内置的指令，必须v-开头，后面的值均为变量
   - v-model （表单元素）它会忽略掉value,checked,selected,作用是：将数据绑定到视图上，视图修改后会影响数据的变化，（如果checkbox,select多选是数组，提供一个value属性）（radio checkbox分组靠的是v-model），（不存在checked selected)
   - v-text 可取代{{}} v-cloak 解决闪烁（块）问题，后期都可以不采用，使用v-cloaks 要加样式
   - v-once 绑定一次，数据在变化不会导致视图刷新，写在不想刷新的标签上
   - v-html 将html字符串转化成html
   - v-for 循环（数组，对象，字符串，数字）
        ```
        <div v-for="value in/of 数组"></div>
        <div v-for="(value,index) in/of 数组"></div>
        ```
   - checkbox(1、如果是复选框 只有一个复选框的时候，会把此值转化为boolean类型true代表选中2、如果是多个checkbox  要增加value属性并且数据类型是数组) (radio checkbox分组靠的是v-model),checked selected不存在
   - 修饰符 .number .lazy
   - 按键盘修饰符 .enter .ctrl .keyCode

## vue 第三天

### 事件v-on(@)
-绑定给dom元素，函数需要定义在methods中，不能和data里的内容重名，this指铅的是实例，不能使用箭头函数，事件源对象如果不写括号，可以自动传入，否则只能传入$event
```
<div @事件名="fn"></div>
```
   - 事件     (冒泡从下到上，捕获从上到下（捕获有限制性）)
        - @事件.shop    .capture.stop阻止事件传播
        ```
        stopPropagation,cancelBubble=true;(阻止冒泡)
        ```
        - @事件.capture    捕获
        ```
        xxx.addEventListener('click',fn,true)
        ```
        - @事件.prevent   阻止默认行为
        ```
        preventDefault,returnValue=false
        ```
        - @事件.once   只绑定一次
        ```
        on('click').off('click')    先绑定在移除
        ```
        - @事件.self
        ```
        e.srcElement(判断当前是点的哪个事件原在执行)&&e.target 判断事件源绑定事件
        ```

## filters(过滤器）实例上可以用
```
{{'123' ｜ my(1,2,3)}}
filters:{  //filters属于某个实例上的
   my(data,param1,param2,param3){

   }
}
new Vue({

})
```
## computed 计算“属性”  属性不是方法
- 方法不会有缓存，computed会根据依赖（归vue管理的数据，可以响应式的变化的）的属性进行缓存
- 两部分组成有get和set（不能只写set）一般情况下通过js赋值影响其他人或者表单元素设置值的时候会调用set方法

## watch 观察

## v-if/v-show
- v-if操作的是dom v-if可以和v-else-if,v-else 连写
- v-show 操作的是样式

## v-bind简写：
- 动态绑定“属性”
```
<img :src="src" :width="w" />
```
## Axios
- Axios是一个基于于promise的HTTP库
- 可以用于浏览器和node.js
## Axios特性
- 支持Promise API
- 拦截请求和响应（请求头加授权信息等）
- 转换请求数据和响应数据（请求时加密敏感信息，返回时解密）
- 取消请求
- 自动转换JSON数据（JSON.stringify()）
- 客户端支持防御XSRF攻击
- Axios基础用法（get,post,put等请求方法）
- Axios进阶用法（实例，配置，拦截器，取消请求等）
- Axios进一步封装，在项目中的实际应用

## 实现单页开发的方式
- 通过hash记录跳转的路径（可以产生历史管理）（哈希值的好处是不会跳转刷新页面）
- 浏览器自带的历史管理的方法history.go(-1)  history.pushState('','','/d')设置状态  需要服务端支持，如没在服务端支持可能会导致404错误
> 开发时使用hash的方式 上线的话我们会使用history的方式

## yarn安装
```
npm install -g yarn 全局安装
yarn -v 查看是否安装成功
yarn init 初始化一个项目
装包
yarn add packagename
yarn add packagename --dev
```

## vue-cli
- 下载一个全局生成vue项目的脚手架  查版本号vue -V
```
npm install vue-cli -g
vue init webpack <项目名字>
cd 项目名字
npm install
npm run dev
npm install less less-loader axios vuex bootstrap --save-dev
```
- 卸载vue-cli2.0
```
npm uninstall -g vue-cli 
```
- 安装vue-cli3.0
```
npm uninstall -g @vue/cli 
```


## 模块
- node模块的规范commonjs
- cmd seajs     amd require
- umd 为了做兼容处理的
- esmodule
   - 如何定义模块(一个js就是一个模块)
   - 如何导出模块(export)
   - 如何使用模块(import)

## 先下载webpack开发依赖
```
npm init -y
npm install webpack --save-dev  或yarn add webpack --dev
```
> 安装webpack 或者less 最好不要安装全局的，否则可能导致webpack的版本差异
- 在package.json中配置一个脚本，这个脚本用的命令是webpack,会去当前的node_modules下找bin对应的webpack名字让其执行，执行的就是bin/webpack.js,webpack.js需要当前目录下有个名字叫webpack.config.js的文件，我们通过npm run build执行的目录是当前文件夹的目录，所以会去当前目录下查找。

## babel转译es6->es5
- 安装babel
```
npm install babel-core --save-dev
npm install babel-loader --save-dev
```

## babel-preset-es2015
- 让翻译官拥有解析es6语法的功能 es6->es5
```
npm install babel-preset-es2015 --save-dev
```

## babel-preset-stage-0
- 解析es7语法的
```
npm install babel-preset-stage-0 --save-dev
```

## 解析样式
- css-loader将css解析成模块，将解析的内容插入到style标签内（）
```
npm install css-loader style-loader --save-dev
```
## less,sass,stylus(预处理语言)
- less-loader less
- sass-loader
- stylue-loader
```
npm install less less-loader --save-dev
```
## 解析图片
- file-loader url-loader(url-loader是依赖于file-loader的)
```
npm install file-loader url-loader --save-dev
```

## 需要解析html插件
- 作用是以我们自己的html为模板将打包后的结果，自动引入到html中产出到dist目录下
```
npm install html-webpack-plugin --save-dev
```

## webpack-dev-server
- 这里面内置了服务，可以帮我们启动一个端口号，当代码更新时，可以自动打包（内存中打包），代码有变化就重新执行
```
npm install webpack-dev-server --save-dev
```

## 完成一个项目
- 进入项目路径  cd 项目路径
- clear
- 初始化  npm init -y
- 打包webpack  启服务webpack-dev-server
- 编译js 核心包babel-core  解析翻译官babel-loader  
  解析es6 babel-preset-es2015 解析es7 babel-preset-stage-0
  样式 css-loader style-loader less less-loader
  图片 file-loader url-loader 
  html html-webpack-plugin
``` 
cd xianmu
clear
npm init -y
npm install webpack webpack-dev-server webpack-cli babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 css-loader style-loader less less-loader file-loader url-loader html-webpack-plugin --save-dev
有可能要 npm install @babel/core babel-loader@7 --save-dev
有可能要 npm install webpack-cli --save-dev
```

## vue依赖
- 解析.vue文件的vue-loader 会自动的调用vue-template-compiler
- 编译vue模板vue-template-compiler
``` 
npm install vue-loader vue-template-compiler vue-router --save-dev
```

## 不支持es6引入的库

```
<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
<script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
```





## 安装
```
npm install vue axios bootstrap
```

## git
- 1、先从github克隆到本地
 git clone https://github.com/kong/springcloud.git
 git clone git@github.com:用户名/项目名.git
 
- 2. 初始化git
 git init

- 3.添加所有文件
 git add .

- 4.提交
 git commit -m " update "

- 5.连接远程仓库
git remote add origin https://github.com/kong/springcloud.git 

- 6. 把本地项目推送到远程仓库
  git push -u origin master (初次推送要加 -u 后面在推送就不用了)

## 转json JSON.stringify()

## Browsersync
- （全局安装）npm install -g browser-sync
- （本地安装）npm install browser-sync --save-dev
- 看文件+服务器 browser-sync start --files "app/css/*.css" --server 全部文件时 browser-sync start --files "**" --server


## uni-app一套代码可生成小程序，h5，安卓APP，IOS APP
## HBuilderX uni-app wap2app MUI 5+Runtime

## 快速启动一个静态文件服务器
```
npm install http-server -g  //全局安装
http-server.cmd  //简写  hs -o    
```

## Mock
- JSON文件的方式就是最简单的mock行为（缺点很明显）
- 自己写一个简单的API接口（不一定会写）
- 第三方工具
  - mock.js（无法持久化数据）mockjs.com  http://mockjs.com/examples.html  https://github.com/nuysoft/Mock/wiki/Getting-Started
  - json-server 提供一种零编码的方式在30秒之内完成一个REST API（讲真） https://github.com/typicode/json-server   http://jsonplaceholder.typicode.com/

## RESTful
- 面向资源（Resource）编程
- 资源指的是一类数据（如电商：有用户，产品，订单，分类等类型的数据
- 产品表 ->就是产品资源
- 最重要的是如何表示一个资源
- 地址即资源
```
http://api.demo.com/users   ->应该是所有的用户数据  
http://api.demo.com/products
http://api.demo.com/products/iphone  ->特指 iphone 这个商品
http://api.demo.com/categories
```
- 对于资源我的的代码中可能的操作只有增删改查
在 HTTP协议中对每一个请求URL都会有不同的调词GET(查、获取数据)/POST(增)/PUT(整体更新)/PATCH()/DELETE(删)

## mock.js使用方法
- 1.引入mock.js文件  mockJs
- 2.引入过后全局对象上会多一个Mock对象
- 3.Mock对象中最常用的就是mock方法
```
Mock.mock('/users','get',{
   hello:'mock.js'
})
```
## JSON Server
JSON Server 中json文件中的每一个属性就是一个资源，最终会被JSON Server 管理
https://github.com/typicode/json-server
测试过程可以用Postman 测试
```
npm install -g json-server  安装
json-server --watch **.json   启动
```
## JSON Server基本特性
- 标准的RESTful API
- 支持过滤    ?id=1&id=2
- 支持分页    ?_limit=2 &_page=2
- 支持排序
- 支持全文检索   ?q=h
- 支持关系
- 支持数据分割
- 支持操作符(大于小于)
- 支持JSONP
- 支持CORS
- 中间件的方式可以自定义更多的特性
## 参考资源
- zce/dashboard -基于Vue.js的一个后台管理系统基本骨架，数据源使用的是json-server   地址：https://github.com/zce/dashboard   https://github.com/zce/dashboard-server
- zce/api-server -我对json-server做了一些包装，增加了一些特性如（JWT）
- 有可能存在的趋势无后端noBackend、severless