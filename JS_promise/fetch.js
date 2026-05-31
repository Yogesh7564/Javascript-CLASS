fetch('https://fakestoreapi.com/products/3')
.then((res)=>res.json())
.then((jsondata)=>{
    console.log(jsondata)
})
.catch((error)=>{
    console.log(error+"promise failed")
})
