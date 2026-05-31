function fun(f){
    console.log("I Am Anonymous")
}
fun()
function print(){
    console.log("Welcome to JS World")
}
function add(X,Y){
    let Z=X+Y
    console.log(Z)
}
function greet(){
    return "Welcome"
}
function multiple(a,b){
    return a*b
}
function fun(){
    //f
    console.log(fun)
}
fun(print)
fun(greet)
fun(print())
fun(add)
fun(multiple(2,3))
