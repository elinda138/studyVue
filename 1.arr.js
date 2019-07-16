//1、遍历数组
let arr=[1,2,3,4,5];
arr.b='100';  //私有属性
for(let i=0;i<arr.length;i++){  //编程式
    console.log(arr[i]);
}

arr.forEach(function(item){   //声明式（不关心如何实现，不支持return）
    console.log(item);
});

for(let key in arr){   //key会变成安符串类型，包括数组的私有属性也可以打印出来
    console.log(typeof key);
    console.log(key);
}
let obj = {school:'zfpx',age:8};  //Object.keys将对象的key作为新的数组
                                //['school','age']
for(let val of Object.keys(obj)){  //val是值，支持return,并且是值of数组（不能遍历对象，只能遍历数组）
    console.log(val);
    console.log(obj[val]);
}

//2、filter（过滤）  是否操作原数组：（不）  返回结果：（过滤后的新数组）   回调函数的返回结果：（如果返回true 表示这一项放到新数组中）     (删除)  
let newAry = [1,2,3,4,5].filter(function(item){  
    return item>2&&item<5;    //返回一个大于2小于5的新数组
});
console.log(newAry);

//3、 map(映射) 将原有的数组映射成一个新数组[1,2,3]  
//<li>1</li><li>2</li><li>3</li>   (更新)  
//不操作原数组  返回新数组  回调函数中返回什么这一项就是什么
let arr1=[1,2,3].map(function(item){
    return `<li>${item}</li>`    // ``  是es6中的模版字符串  遇到变量用${}取值
})
console.log(arr1);
console.log(arr1.join(''));

//4、 includes   返回的是boolean
let arr3=[1,2,3,4,5];
console.log(arr3.includes(3)); 

//5、find 返回找到具体的那一项   不会改变原数组  回调函数中返回true表示找到了，找到后停止循环，后面的不在执行
let result = arr3.find(function(item,index){   //找到具体的某一项用find
    return item.toString().indexOf(5)>-1     //toString()转为字符串
});
console.log(result);
//6、some 找true 找到true后停止 返回true  找不到返回false
//7、every 找false 找到false后停止 返回false
//8、reduce 收敛4个参数（上一个，下一个，索引，原数组）  返回的是叠加后的结果 原数组不发生变化，回调函数返回的结果：
//用于求和求叠加  数组扁平化，把二维数组变成一维数组
//prev代表的是数组的第一项，next是数组的第二项
//没有写返回值的情况下，第二次prev是undefined，next是数组的第三项 。。。
//本次的返回值 会作为下一次的prev  
[1,2,3,4,5].reduce(function(prev,next,index,item){
    console.log(arguments);   //arguments类数组
    return 100; //本次的返回值 会作为下一次的prev 
});
let sum=[1,2,3,4,5].reduce(function(prev,next,index,item){
    console.log(prev,next);   //arguments类数组
    return prev+next; //本次的返回值 会作为下一次的prev 
});
console.log(sum);

let sum2=[0,{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function(prev,next){
    console.log(prev,next)
    return prev + next.price * next.count
    //0+60
    //60+90
    //150+120
});
console.log(sum2);
let sum3=[{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function(prev,next){
    console.log(prev,next)
    return prev + next.price * next.count
},0);   //默认指定第一次的prev
console.log(sum3);

//数组扁平化，把二维数组变成一维数组   ,叠加起来
// [[1,2,3],[4,5,6],[7,8,9]]
console.log([[1,2,3],[4,5,6],[7,8,9]].join(','));  //返回的不是数组类型
let flat=[[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next){
    return prev.concat(next);
});
console.log(flat);





