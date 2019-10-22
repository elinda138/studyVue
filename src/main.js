let str = require('./a.js');
console.log(str);
import xxx from './b.js'
console.log(xxx);

let a=b=>c=>d=> b+c+d;
a(1)(2)(3)
console.log(a(1)(2)(9));

let obj={school:'zfpx'};
let obj1={age:9};
let newObj={...obj,...obj1};//es7语法
console.log(newObj);

import './index.css';//引入css
import './style.less';

//在js中引入图片需要import,或者写一个线上路径
import page from './yao2.jpg'
console.log(page);   //page就是打包后图片的路径
let img=new Image();
img.src=page;   //写了一个字符串 webpack不会进行查找

document.body.appendChild(img);