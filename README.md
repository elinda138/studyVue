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
## Axios基础用法（get,post,put等请求方法）
- axios请求方法：get\(post\put\patch)\delete
- get:获取数据
- post:提交数据（表单提交，文件上传）新建
- put:更新编辑数据（所有的数据都推送到服务端即后端）更新
- patch:更新编辑数据(只将修改的数据推送到后端)数据量大就可以用patch
- delete:删除数据
```javascript
    // http://localhost:8081/data.json?id=12
    //第一种方法
    axios.get('/data.json',{
        params:{
            id:12
        }
    }).then((res)=>{
      console.log(res);
    })
    //第二种方法
    axios({
        method:'get',
        url:'/data.json',
        params:{
            id:12
        }
    }).then((res)=>{
      console.log(res);
    })
    //post-提交数据
    //form-data  表单提交（图片上传和文件上传）
    //application/json
    let data={
        id:12
    }
    axios.post('/post',data).then(res=>{
        console.log(res);
    })
    axios({
        method:'post',
        url:'/post',
        data:data
    }).then(res=>{
        console.log(res);
    })
    //form-data请求
    let formData = new FormData()
    for(let key in data){
        formData.append(key,data[key])
    }
    axios.post('/post',formData).then(res=>{
        console.log(res);
    })

    //put-更新编辑数据（所有的数据都推送到服务端即后端）更新
    axios.put('/put',data).then(res=>{
        console.log(res);
    })
    //patch-更新编辑数据(只将修改的数据推送到后端)数据量大就可以用patch
    axios.patch('/patch',data).then(res=>{
        console.log(res);
    })
    axios.patch('/patch',formData).then(res=>{
        console.log(res);
    })

    //delete 请求   
    //delete?id=12
    axios.delete('/delete',{
        params:{
            id:12
        }
    }).then(res=>{
        console.log(res);
    })
    //delete-删除数据
    axios.delete('/delete',{
        data:{
            id:12
        }
    }).then(res=>{
        console.log(res);
    })

    axios({
        method:'delete',
        url:'/delete',
        params:{},
        data:{}
    }).then(res=>{
        console.log(res);
    })

  ```
  # 并发请求，同时进行多个请求，并统一处理返回值
  - axios.all()——参数是数组   
  - axios.spread()——axios.all()的多个请求完成后，把返回的数据进行分割处理，对每个返回值进行统一的处理   分割不同请求的返回值
  ```javascript
    axios.all([
        axios.get('/data.json'),
        axios.get('/city.json')
    ]).then(
        axios.spread((dataRes,cityRes)=>{
            console.log(dataRes,cityRes)
        })
    )
  ```
## Axios进阶用法（实例，配置，拦截器，取消请求等）
# axios实例
- 数组创建的两种方式：let arr=[] 或 let arr=new Array()
- 后端接口地址有多个，并且超时时长不一样，所以可以创建实例，在实例中配置参数，然后在去请求
```javascript
import axios from 'axios'
export default {
  name: 'axios3-1',
  created(){
    let instance = axios.create({
      baseURL:'http://localhost:8081',
      timeout:1000  //设置超时时长
    })
    let axios2 = axios.create({
      baseURL:'http://localhost:9090',
      timeout:2000  
    })
    instance.get('/data.json').then(res=>{
      console.log(res)
    })
    axios2.get('/city.json').then(res=>{
      console.log(res)
    })
  },
}
```
# axios配置参数都有哪些
```javascript
import axios from 'axios'
import { request } from 'http'
export default {
  name: 'axios3-2',
  created(){
    axios.create({
      baseURL:'http://localhost:8080',  //请求的域名的基本地址
      timeout:1000, //请求超时时长需要后端提供参考依据
      url:'/data.json', //请求路径
      method:'get,post,put,patch,delete',  //请求方法
      headers:{
        token:''
      },//请求头
      params:{},//请求参数拼接在url上
      data:{},//请求参数放在请求体里
    })
  
    //1.axios全局配置  ---defaults指向axios库的默认配置
    axios.defaults.timeout = 1000
    axios.defaults.baseURL = 'http://localhost:8080'
    //2.axios实例配置
    let instance =axios.create()  //申明一个实例
    instance.defaults.timeout = 3000
    //3.axios请求配置
    instance.get('/data.json',{
      timeout:5000
    })

    //实际开发 （全局配置比较少用到）
    //以有两种请求接口为例：
    //http:localhost:9090
    //http:localhost:9091
    let instance = axios.create({
      baseURL:'http://localhost:9090',  
      timeout:1000
    })
    let instance1 = axios.create({
      baseURL:'http://localhost:9091',  
      timeout:3000
    })
    //baseURL,timeout,url,method,params
    instance.get('/contactList',{
      params:{}
    }).then((res)=>{
      console.log(res)
    })
    //baseURL,timeout,url,method
    instance1.get('/orderList',{
      timeout:5000
    }).then((res)=>{
      console.log(res)
    })
    
  },
}
```
# 拦截器：在请求或响应被处理前拦截它们（在发起请求前做一些处理，请求回来后端响应后做一些处理）
- 请求拦截器  axios.interceptors.request.use
- 响应拦截器  axios.interceptors.response.use
- 取消拦截器  axios.interceptors.request.eject
```javascript
import axios from 'axios'
export default {
  name: 'axios3-3',
  created(){
    //请求拦截器
    //use(请求前的回调函数，请求错误的回调函数)
    axios.interceptors.request.use(
      config=>{
        //在发送请求前做些什么
        return config
      },err=>{
        //在请求错误的时候做些什么
        return Promise.reject(err)
      }
    )
    //响应拦截器
    axios.interceptors.response.use(
      res=>{
        //请求成功对响应数据做处理
        return res  //这个res会到axios.get().then(res=>{})这里面的then的res
      },err => {
        //响应错误做些什么   （  请求没到后端返回404     到了后端后响应的错误返回500  ）
        return Promise.reject(err)  //这个err会到axios.get().then().catch(err=>{})这里的catch的err
      }
    )
    //取消拦截器（了解）
    let interceptors = axios.interceptors.request.use(
      config =>{
        config.headers={
          auth:true
        }
        return config
      }
    )//申明一个实例变量把拦截器存放起来。
    axios.interceptors.request.eject(interceptors)//取消这个拦截器

    //例子 登录状态（token:'')  需要登录的接口
    let instance = axios.create({})
    instance.interceptors,request.use(config=>{
      config.headers.token =''  //给headers设置token，赋值一个字符串
      return config
    })//发送请求时需要添加headers.token，headers.token会自动追加请求拦截器，不需要手动追加。
    //不需要登录的接口
    let newinstance = axios.create({})
    
    //移动端开发
    let instance_phone = axios.create({})
    instance_phone.interceptors.request.use(config=>{
      $('#modal').show()//弹窗
      return config
    })//请求前显示等待弹窗
    instance_phone.interceptors.response.use(res=>{
      $('#modal').hide()//弹窗
      return res
    })//请求成功响应后隐藏等待弹窗
  },
}
```
# 错误处理：请求错误时进行的处理
```javascript
import axios from 'axios'
export default {
  name: 'axios3-4',
  created(){
    axios.interceptors.request.use(
      config=>{
        //在发送请求前做些什么
        return config
      },err=>{
        //在请求错误的时候做些什么
        return Promise.reject(err)
      }
    )
    axios.interceptors.response.use(
      res=>{
        //请求成功对响应数据做处理
        return res  //这个res会到axios.get().then(res=>{})这里面的then的res
      },err => {
        //响应错误做些什么   （请求没到后端返回404      到了后端后响应的错误返回500 ）
        return Promise.reject(err)  //这个err会到axios.get().then().catch(err=>{})这里的catch的err
      }
    )
    axios.get('/data.json').then((res)=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

    //例子：实际开发过程中，一般要添加统一的错误处理
    let instance = axios.create({})
    instance.interceptors.request.use(config=>{
      return config
    },err=>{
      //请求错误 一般http状态码以4开头，常见：401超时，404 没找到
      $('#modal').show()  //请求错误的弹窗
      setTimeout(()=>{
        $('#modal').hide()
      },2000)
      return Promise.reject(err)
    })
    instance.interceptors.response.use(res=>{
      return res
    },err=>{
      //响应错误处理 一般http状态码以5开头，常见：500系统错误 502系统重启
      $('#modal').show()  //响应错误的弹窗
      setTimeout(()=>{
        $('#modal').hide()
      },2000)
      return Promise.reject(err)
    })
    //如果说不需要做错误的特殊处理，直接这个就可以了。如果还需要更特殊的错误处理，就在加上.catch(err=>{})
    instance.get('/data.json').then(res=>{
      console.log(res)
    })

  },
}
```
# 取消请求：用于取消正在进行的http请求（了解）
- 什么情况下可能用到取消请求
- 后台-数据操作，增删改查、大批量查询如3-5秒还没有查询到时就可能用到取消请求
```javascript
import axios from 'axios'
export default {
  name: 'axios3-5',
  created(){
    let source = axios.CancelToken.source()  //申明一个含有CancelToken.source()的变量
    axios.get('/data.json',{
      cancelToken:source.token   //把token放到请求参数cancelToken的source里
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    //取消请求(message可选)
    source.cancel('cancel http')
  },
}
```
## Axios进一步封装，在项目中的实际应用
# 没有封装之前
```javascript
/**
<template>
  <div class="home">
    <!-- 联系人列表 -->
    <van-contact-list
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"  
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>
*/

//<script>
import axios from 'axios'
import { ContactList,Toast,ContactEdit,Popup } from 'vant';
export default {
  name: 'contactList',
  components: {
    [ContactList.name]:ContactList,   //在template里面使用的才要注册组件
    [ContactEdit.name]:ContactEdit,
    [Popup.name]:Popup
  },
  data(){
    return{
      // {
      //   id:1,
      //   name:'',
      //   tel:''
      // }
      list:[],
      instance:null,//axios实例
      showEdit:false,//编辑弹窗的显隐
      editingContact:{},//正在编辑的联系人数据
      isEdit:false,//控制新建或编辑 false为新建，true为编辑
    }
  },
  created(){
    this.instance = axios.create({
      baseURL:'http://localhost:9000/api',
      timeout:1000  //默认就是1000
    })
    //获取联系人列表
    this.getList()
    
  },
  methods:{
    //获取联系人列表
    getList(){
      this.instance.get('/contactList').then((res)=>{
        this.list = res.data.data
      }).catch(err=>{
        Toast('请求失败，请稍后重试')
      })  
    },
    //添加联系人
    onAdd(){
      this.showEdit = true
      this.isEdit =false
    },
    //编辑联系人  需要传正在编辑的对象info
    onEdit(info){
      this.showEdit = true
      this.isEdit = true
      this.editingContact = info
    },
    //保存联系人
    onSave(info){
      if(this.isEdit){
        //编辑保存
        this.instance.put('/contact/edit',info).then(res=>{
          if(res.data.code == 200){
            Toast('保存成功')
            this.showEdit = false
            this.getList()//重新获取列表信息，刷新列表
          }
        })
      }else{
        //新建保存
        this.instance.post('/contact/new/json',info).then(res=>{
          if(res.data.code == 200){
            Toast('保存成功')
            this.showEdit = false
            this.getList()//重新获取列表信息，刷新列表
          }
        }).catch(()=>{
          Toast('请求失败，请稍后重试')
        })
      }

    },
    //删除联系人
    onDelete(info){
      this.instance.delete('/contact',{
        params:{
          id:info.id
        }
      }).then(res=>{
        if(res.data.code == 200){
          Toast('删除成功')
          this.showEdit = false
          this.getList()//重新获取列表信息，刷新列表
        }
      }).catch(()=>{
        Toast('请求失败，请稍后重试')
      })
    },
  }
}
//</script>
/**
<style scoped>
.van-contact-list_add{
  z-index: 0;
}
.van-popup{
  height: 100%;
}
</style>
*/
```
# 1、创建contactApi.js
```javascript
const CONTACT_API = {
    //获取联系人列表
    getContactList:{
        method:'get',
        url:'/contactList'
    },
    //新建联系人 form-data
    newContactForm:{
        method:"post",
        url:"/contact/new/form"
    },
    //新建联系人 application/json
    newContactJson:{
        method:"post",
        url:"/contact/new/json"
    },
    //编辑联系人
    editContact:{
        method:'put',
        url:'/contact/edit'
    },
    //删除联系人
    delContact:{
        method:'delete',
        url:'/contact'
    },
}
export default CONTACT_API
```
# 2、创建http.js
```javascript
import axios from 'axios'
import service from './contactApi';
import {Toast} from 'vant'
let instance = axios.create({
    baseURL:"http://localhost:9000/api",
    timeout:1000
})
//service 循环遍历出不同的请求方法
const Http = {} //Http对象的作用：用来包裹请求方法的容器  对contactApi中service进行遍历，生成不同的请求方法，把请求方法和它对应的key放在这个对象里面

//1、请求格式/参数的统一
for(let key in service){//遍历service  key代表contactApi里的getContactList、newContactForm等
    let api= service[key];  //url method

    //async 作用：避免进入回调地狱
    Http[key] = async function(
        params,  //请求参数get:url,put,post,patch(data),delete:url
        isFormData=false,  //标识是否是form-data请求
        config={} //配置参数
    ){
        // let  url = api.url  //拿到这个url
        let newParams = {}  //newParams用于判断是否为FormData请求，如果不是FormData那newParams就是params。如果是FormData请求就要把params装换成FormData对象

        //content-type是否是form-data的判断
        if(params && isFormData){
            newParams = new FormData()  //创建一个FormData格式的对象
            for(let key in params){  //遍历对象params
                newParams.append(key,params[key])
            }
        }else{
            newParams = params
        }

        //不同请求方式的判断
        let response = {}; //请求的返回值
        if(api.method === 'put' || api.method ==="post" || api.method === 'patch'){
            try{
                response = await instance[api.method](api.url,newParams,config)
            }catch(err){
                response = err
            } 
        }else if(api.method === 'delete' || api.method === 'get'){
            config.params = newParams
            try{
                response = await instance[api.method](api.url,config)
            }catch(err){
                response = err
            } 
        }
        return response;  //返回请求的响应值
    }
    
    // Http[key] = async function(){  //Http指向的是每一个请求方法，key指getContactList、newContactForm等 就是通过这个key可以直接调用请求方法了
    //     await axios.get('url')   //await后面跟着异步函数这里就是axios请求   可申明一个变量来存放返回值
    // }

    //async 作用：避免进入回调地狱
    // axios.get().then(res =>{ 
    //     //一层一层的嵌套
    //     axios.get().then(res=>{})
    // }).catch(err=>{})

    // Http[key] = async function(){
    //     let res = await axios.get('url')
    //     let res2 = await axios.get('url')//等待res执行之后才会执行res2的方法
    // }
    // Http[key] = async function(){
    //     let res = null
    //     try{
    //         res = await axios.get('url')
    //     }catch(err){
    //         res = err
    //     }
    // }
}
//2、拦截器的添加
//请求拦截器
instance.interceptors.request.use(config =>{
    //发起请求前做些什么(弹窗提示，loading)
    Toast.loading({
        mask:false,
        duration:0,   //0为一直存在
        forbidClick:true,  //禁止点击
        message:'加载中...'
    })
    return config
},() =>{
    //请求错误
    Toast.clear()
    Toast('请求错误，请稍后重试')
})
//响应拦截器
instance.interceptors.response.use(res =>{
    //响应请求成功
    Toast.clear()
    return res.data
},() =>{
    //响应失败
    Toast.clear()
    Toast('请求错误，请稍后重试')
})

export default Http
```
# 3、封装之后main.js 
```javascript
import Http from './service/http'   //引入
Vue.prototype.$Http = Http   //把Http挂载到Vue实例上  全局
```
# 4、封装之后页面调用js
```javascript
   //获取联系人列表
    async getList(){
      let res = await this.$Http.getContactList();
      // console.log(res)
      this.list = res.data
      console.log(res)
    },
    //保存联系人
    async onSave(info){
      if(this.isEdit){
        //编辑保存
        let res = await this.$Http.editContact(info)
        if(res.code === 200){
          Toast('保存成功')
          this.showEdit = false
          this.getList()//重新获取列表信息，刷新列表
        }
      }else{
        //新建保存
        //content-type:application/json
        // let res = await this.$Http.newContactJson(info)
        // if(res.code == 200){
        //   Toast('保存成功')
        //   this.showEdit = false
        //   this.getList()//重新获取列表信息，刷新列表
        // }

        //content-type:form-data
        let res = await this.$Http.newContactForm(info,true)
        if(res.code == 200){
          Toast('保存成功')
          this.showEdit = false
          this.getList()//重新获取列表信息，刷新列表
        }
      }
    },
    //删除联系人
    async onDelete(info){
      let res = await this.$Http.delContact(
        {
          id:info.id
        }
      )
      if(res.code === 200){
        Toast('删除成功')
        this.showEdit = false
        this.getList()//重新获取列表信息，刷新列表
      }
    },
```

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

## vue-cli3.0脚手架搭建
- 卸载vue-cli2.0
```
npm uninstall -g vue-cli 
```
- 安装vue-cli3.0
```
npm uninstall -g @vue/cli 
```
vue create 项目名
cd 项目名
npm run serve/yarn serve
地址：https://cli.vuejs.org/zh/guide/
# 提示：node 版本要 8.9+
# 安装步骤：
- 两种方式：
- (1) npm install -g @vue/cli
- (2) yarn global add @vue/cli
- 安装完成之后检查 vue --version/ vue -V 检查版本
- npm install -g @vue/cli-service-global
- 创建项目
- vue create hello-world // 项目名称
- 1.终端：（上下键选择）回车
default (bable，eslint） // 默认
Manually select features // 手动 **选择手动创建项目
- 2.终端：（上下键移动键，空格键是否选中）回车
? Please pick a preset: Manually select features
? Check the features needed for your project:
(* ) Babel
( ) TypeScript // 语法
( ) Progressive Web App (PWA) Support // PWA
(* ) Router // 路由
(* ) Vuex // store
(* ) CSS Pre-processors // 预编译
(* ) Linter / Formatter // 格式化代码
( ) Unit Testing
( ) E2E Testing
//提示： Babel, Router, Vuex, CSS Pre-processors, Linter 选中

- 3.终端：
? Please pick a preset: Manually select features // 手动创建项目
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
//在生产中需要适当的服务器设置用于索引回退
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS
// css 预编译
? Pick a linter / formatter config: Prettier // (ESLint + Prettier)格式化程序配置
? Pick additional lint features: Lint on save // 保存即检查格式
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
// 其他配置数据单独存放再一个配置文件内
? Save this as a preset for future projects? Yes
// 是否保存这个项目的配置
? Save preset as: SaveVue3.0
// 是的话 项目命名假设为：SaveVue3.0

- 4.使用图形化界面
vue ui
图形化数据
- 5.yarn serve 启动项目
- 6.yarn build 打包项目
（4，5，6 不可同时执行）
## vscode 代码vue3.0检测设置
- vscode 加载插件 ESLint 代码检测工具  (文件 ~ 首选项 ~ 设置 ~ 工作区)
```
{
"editor.formatOnSave": false,
"eslint.autoFixOnSave": true,
"eslint.validate": [
"javascript",{
"language": "vue",
"autoFix": true
},
"html",
"vue"
]
}
```

```
npm install css-loader style-loader less less-loader --save-dev  样式
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano cssnano-preset-advanced postcss-import postcss-url --S 适配vw

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
npm install css-loader style-loader less less-loader --save-dev
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

## koa2
```
npm init yes
npm install --save koa  --save参数，表示自动修改package.json 文件，自动添加依赖项
npm install --save koa-router   koa路由：路由就是根据不同的url地址，加载不同的页面实现不同的功能。
```
- 中间件：匹配路由之前或者匹配路由完成做的一系列的操作。（ 功能：执行任何代码、修改请求和响应对象、终结请求-响应循环、调用堆栈中的下一个中间件)

- 应用级中间件（匹配路由之前打印日期）
- 路由级中间件（匹配到news路由后继续向下匹配路由）
- 错误处理中间件
- 第三方中间件

- ejs模版引擎的使用：
- 1、npm install koa-views --save  
- 2、npm install ejs --save
- 3、var views = require('koa-views');
app.use(views(__dirname,{extension:'ejs'}))
- 4、await ctx.render('index');

## Koa中post koa-bodyparser 中间件获取表单提交的数据
- 1、安装   npm install --save koa-bodyparser
- 2、引入  var bodyParser = require('koa-bodyparser')
- 3、配置 post koa-bodyparser的中间件   app.use(bodyParser());  
- 4、获取表单提交数据   ctx.request.body; 

## Koa中 koa-static 静态资源中间件   静态web服务
- 1、安装   npm install --save koa-static
- 2、引入  var static = require('koa-static')
- 3、配置中间件   app.use(static('static'));  

## Koa中 art-template 模版引擎   
- http://aui.github.io/art-template/koa/
- http://aui.github.io/art-template/zh-cn/docs/syntax.html
- 1、安装   npm install --save art-template
-           npm install --save koa-art-template
- 2、引入  var render = require('koa-art-template');
- 3、配置 
```  
  render(app, {
    root: path.join(__dirname, 'view'),  //视图的位置
    extname: '.html',  //后缀名
    debug: process.env.NODE_ENV !== 'production'   //是否开启调试模式
 });
 ```
- 4、调试   await ctx.render('user');

## cookie保存在浏览器客户端-是存储于访问者的计算机中的变量，可以让我们用同一个浏览器访问同一个域名的时候共享数据
# cookie可以做什么：
- 1、保存用户信息
- 2、浏览器历史记录
- 3、猜你喜欢的功能
- 4、10天免登录
- 5、多个页面之间的数据传递
- 6、cookie实现购物车功能

## session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上。
# session的工作流程：当浏览器方问服务器并发送一次请求时，服务器端会创建一个session对象，生成一个类似于key，value的键值对，然后将key(cookie)返回到浏览器（客户）端，浏览器下次在访问时，携带key(cookie),找到对应的session(value).客户信息都保存在session中
