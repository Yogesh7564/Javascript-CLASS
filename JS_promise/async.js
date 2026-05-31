// async function fun1(){
//     let response = await fetch('https://fakestoreapi.com/products/5');
//     let jsondata=await response.json()
//     console.log(jsondata)
//     let result = jsondata
//     console.log(result)
// }
// fun1()



fetch('https://fakestoreapi.com/products/5')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error(error))
