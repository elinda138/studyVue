let vm = new Vue({
    el:'#app',
    data:{   
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:'',
        cur:''
    },
    created(){  //ajax获取 初始化数据 页面一加载创建
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;  //有数据用存的，没有用默认的


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