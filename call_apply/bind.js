var obj1={
    c:100
}
var obj2={
    c:500
}
function fnAdd(x,y){
    let z=x+y+this.c
    console.log(z)
}
let fnadd=fnAdd.bind(obj1)
fnadd(10,10)
let fNadd=fnAdd.bind(obj2,50,50)
fNadd()
fnAdd.bind(obj2,5,5)
fnAdd.bind(obj1)(10,10)