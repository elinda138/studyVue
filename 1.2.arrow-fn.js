//箭头函数   不具备this,arguments   (普通函数this的指向是该函数被调用的对象，箭头函数函数体中this的指向是定义时this的指向，避免在运行时this指向不明确)
//自己家没有this就找上一级的this
//如何更改this指向
//1)call apply bind
//2)var that =this;
//3)=>
//如何确定this是谁  看谁调用的  .点前面是谁this就是谁
//原始函数
// function a(b){
//     return b+1;
// }
//箭头函数  ()=>{}  
// let a = b => b+1;
//去掉function关键字
//当申明的参数只有1个时，可以省略()，小括号和大括号之间有一个箭头
//如果没有大括号则表达式直接是返回值  有大括号必须写return
//原始函数
// function a(b){
//     return function(c){
//         return b+c;
//     }
// }
// console.log(a(1)(2));

//箭头函数
let a = b => c => b + c;   //高阶函数（=>两箭头的）
console.log(a(1)(2));
//闭包：函数执行的一瞬间叫闭包，（闭包是不销毁的作用域）,当执行后返回的结果必须是引用数据类型，被外界变量接受 此时这个函数不会销毁（模块化)
//销毁的作用域
// function a(b){
//     return function(c){
//         return b+c;
//     }
// }
// a(1);  
//不销毁的作用域 
// let a = function a(b){
//     return function(c){
//         return b+c;
//     }
// }
// a();   //执行完函数返回的结果赋值给a
// let a = function a(b){
//     let a=1;  //这里申明的变量都是私有的，不会被外界调用
//     return function(c){
//         return b+c;
//     }
// }();   //这样不会被销毁

//在vue中很多时候不能用箭头函数
[1,2,3].forEach(item => console.log(item));  


