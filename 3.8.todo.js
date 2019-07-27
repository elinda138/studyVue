let vm = new Vue({
    el:'#app',
    data:{   
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:''
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
        }
    },
    computed:{
        count(){
            return this.todos.filter(item=>!item.isSelected).length;
        }

    }
})
//1、装数据循环到页面上
//2、敲回车时添加新数据（需要加入isSelected属性）
//3、删除功能
//4、计算一下当前没有被选中的个数