//发布 emit 订阅 on{女生失恋：['吃','购物','吃']}
function Girl(){
    this._events ={}//定义初始化空对象默认存储所有的事  _events表示私有的
}//{失恋:[cry]}
//eventName发生的事，callback发生之后执行的函数 
Girl.prototype.on = function(eventName,callback){
    ///判断有没有this._events[eventName]这个数组
    if(this._events[eventName]){//有，不是第一次
        this._events[eventName].push(callback);  //{失恋:[cry,eat,shopping]}
    }else{
        this._events[eventName]=[callback] //第一次{失恋:[cry]}
    }
};  //把方法放到原型上
// 剩余运算符...args将剩余的参数作为数组传进去['我','你','他']
Girl.prototype.emit = function(eventName,...args){
    // [].slice.call(arguments,1);   //转化成数组在截取第一个
    // Array.from(arguments).slice(1);  //类数组转化为数组
    if(this._events[eventName]){
        // this._events[eventName].forEach(cb => cb(args));//我你
        // this._events[eventName].forEach(cb => cb.apply(this,args));
        
        // this._events[eventName].forEach(cb => cb(1,2,3));//[1,2,3]
        this._events[eventName].forEach(cb => cb(...args));
    }
}; 
let girl = new Girl(); //new一个女生
let cry=(who)=>{console.log(who+'哭');};
let shopping=(who)=>{console.log(who+'购物');};
let eat=(who)=>{console.log(who+'吃');};
//给这个女生绑定事件
girl.on('失恋',cry);   //{失恋:[cry]}
girl.on('失恋',eat);   //{失恋:[cry,eat]}
girl.on('失恋',shopping);   //{失恋:[cry,eat,shopping]}
girl.emit('失恋','我','你');