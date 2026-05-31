function print(){
    console.log("Welcome js class")
}
function add(x,y){
    console.log(x+y)
}
function f1(f){
    f()
}
console.log("=================")
f1(print)
console.log("=================")
f1(function(){
    add(30,50)
})
f1(function(){
    var city="Bangalore"
    console.log(city)
})
