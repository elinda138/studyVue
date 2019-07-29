let vm = new Vue({
    el:'#app',
    data:{   
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:'',
        cur:'',
        hash:''
    },
    created(){  //ajax获取 初始化数据 页面一加载创建
        //如果localStorage中有数据就用有的这个，如数据就用默认的
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;  
        //监控hash值的变化,如果页面已经有hash了，重新刷新页面也要获取hash值  绑定个事件，hash一变就触发
        this.hash = window.location.hash.slice(2) || 'all';  //slice(2)截取掉#/ ，没有hash时用默认的all
        window.addEventListener('hashchange',()=>{
            // console.log(window.location.hash)
            //当hash值变化 重新操作记录的数据
            this.hash = window.location.hash.slice(2);
        },false);



    },
    watch:{
        // todos(){ //watch默认只监控一层的数据变化，深度监控
        //     alert();
        // }
        todos:{//watch默认只监控一层的数据变化，深度监控
            handler(){//触发器-默认写成函数就相当于默认写了个handler
                // alert();
                //localStorage默认存的是字符串
                localStorage.setItem('data',JSON.stringify(this.todos));
            },deep:true  //是否深度
        }
    },
    methods:{
        add(){   //keydown/keyup,keydown的时候内容没有进入到输入框内
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title ='';
        },
        remove(todo){
            this.todos=this.todos.filter(item=>item !== todo); //过滤返回一个新数组，拿出todos的每一项和当前被点击传过来的这一项比，如果相等就不要了，即返回false,filter把true留下，但我们是要删除所以取反
        },
        remember(todo){//当前传递的是todo（点击的这一项）
            this.cur = todo;//赋值给cur
        },
        cancel(){
            this.cur='' //cur再次等于空,循环时等于空不等于任何个todo  所以cur!==todo为true
        }
    },
    computed:{
        filterTodos(){   //过滤后的数据
            if(this.hash === 'all') return this.todos
            if(this.hash === 'finish') return this.todos.filter(item=>item.isSelected)
            if(this.hash === 'unfinish') return this.todos.filter(item=>!item.isSelected)
            return this.todos;
        },
        count(){
            return this.todos.filter(item=>!item.isSelected).length;
        }

    },
    directives:{
        focus(el,bindings){//el代表当前指令所在的dom即input， bindings代表cur==todo
            //当点击当前li时让内部的输入框获取焦点
            if(bindings.value){
                el.focus();//获取焦点
            }
        }
    }
})
//1、装数据循环到页面上
//2、敲回车时添加新数据（需要加入isSelected属性）
//3、删除功能
//4、计算一下当前没有被选中的个数