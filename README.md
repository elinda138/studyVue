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
