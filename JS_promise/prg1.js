let promDemo=new Promise(function(resolve,reject){
    resolve("success")
})
promDemo.then(function(result){
    console.log(result)
})
promDemo.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})