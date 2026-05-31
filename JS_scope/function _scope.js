function f1(){
    var name="virat"
    function fn(){
        console.log(name)
        console.log("fn is called")
    }
    console.log(name)
    return fn
}
//console.log(name)
var res=f1()
console.log(res())
//fn()
