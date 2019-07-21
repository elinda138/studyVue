//promise 解决回调问题的 promise三个状态：成功态 失败态 等待
console.log(Promise);
//resolve代表的是转向成功态
//reject代表的是转向失败态  resolvet和reject均是函数
//Promise的实例就一个then方法,then方法中有两个参数
let p = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let a = '蘑菇';
        // resolve(a);
        reject(a);//成功失败都是我定义调用的，有成功就不能有失败，有失败就不能有成功
    },2000)
});
p.then((data)=>{console.log(data)},(err)=>{console.log('err')});

