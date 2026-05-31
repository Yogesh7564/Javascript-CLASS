let obj1={
    c:100
}
let obj2={
    c:200
}




function add(a,b){
    console.log(a+b+this.c)
}
add.apply(obj2, [300,10])
add.apply(obj1,[10,20])