
function myFunction(){
    var x=55
    var y=66
    console.log(x+y)
}
myFunction()

let fun=function(){
    console.log("I Am Anonymous")
}
fun()

let add=function(x,y){
    let z=x+y
    console.log(z)
}
add(5,6)

let greet=function(){
    return "Hello"
}
console.log(greet())

let n=function(name){
    return "My name is " +name
}
console.log(n("Jack"))