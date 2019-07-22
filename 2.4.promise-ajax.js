function ajax({url='',type='get',dataType='json'}){
    return new Promise((resolve,reject)=>{
        console.log('-----')
        let xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType = dataType;
        xhr.onload=function(){//xhr.readState=4 xhr.status=200
            console.log(xhr);
            if(xhr.status==200){
                resolve(xhr.response);//成功调用成功的方法
            }else{
                reject('not found');
            }
            
        };
        xhr.onerror = function(err){
            reject(err);//网络不好时失败调用成功的方法
        }
        xhr.send();
    })
}
// ajax({url:'./carts.json'})

// ajax({}).then(()=>{

// },()=>{

// });
// $.ajax({
//     url:'',
//     data:{},
//     type:'get',
//     dataType:'json',
//     success
// })
