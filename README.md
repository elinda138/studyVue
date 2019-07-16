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

## vue 第一天复习
- 初始化webpack    npm init   npm init -y(可以不用不停的打yes)
- vm => viewModel 数据最终都会被vm所代理
- {{a}}  取值表达式，通过{{}}来进行取值,默认可以不写this，表达式  赋值运算  计算 三元表达式  尽量在{{}}里面少写逻辑 可以用（ computed）
- 指令：dom元素的行间属性，vue提供了内置的指令，必须v-开头，后面的值均为变量
   - v-model   （表单元素）忽略掉value,checked,selected,将数据绑定到视图上，视图修改后会影响数据的变化
   - checkbox(1、如果是复选框 只有一个复选框的时候，会把此值转化为boolean类型true代表选中2、如果是多个checkbox  要增加value属性并且数据类型是数组) (radio checkbox分组靠的是v-model),checked selected不存在
   - 修饰符 .number .lazy
   - 按建修饰符 .enter .ctrl .keyCode
   - 事件     (冒泡从下到上，捕获从上到下（捕获有限制性）)
        - @事件.shop    .capture.stop阻止事件传播
        ```
        stopPropagation(阻止冒泡),cancelBubble=true;
        ```
        - @事件.capture    捕获
        ```
        xxx.addEventListener('click',fn,true)
        ```
        - @事件.prevent
        ```
        preventDefault,returnValue=false
        ```
        - @事件.once   只绑定一次
        ```
        on('click').off('click')    先绑定在移除
        ```
        - @事件.self
        ```
        e.srcElement&&e.target 判断事件源绑定事件
        ```
   - jquery once
   - e.srcElement(判断当前是点的哪个事件原在执行)&&e.target 判断事件源绑定事件
## 安装
npm install vue axios bootstrap



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
  git push -u origin master (初次推送)
