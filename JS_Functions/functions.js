//named functions
function myfunction() 
{
    var x=10;
    var y=20;
    var z=x+y;
    console.log(z);
}
myfunction();

//parameterized functions
function myfunction1(a,b)
{
    var c=a+b;
    console.log(c);
}
myfunction1(5,10);

//return functions
function myfunction2(a,b)
{
    return a*b;
}
var result=myfunction2(25,6);
console.log(result);

//anonymous functions
var a=function(){
    console.log("This is an anonymous function");
}
a();

//callback functions
function myfunction3(a,b,callback)
{    var c=a-b;
    callback(c);
}
myfunction3(50,20,function(result)
{
    console.log(result);
});

//higher order functions
function myfunction4(a,b)
{    return function()
    {
        var c=a**b;
        console.log(c);
    }
}
var result1=myfunction4(2,3);
result1();

//arrow functions
var myfunction5=(a,b)=>
{
    var c=a%b;
    console.log(c);
}
myfunction5(10,3);

//immediately invoked function expression(IIFE)
(function(a,b)
{
    var c=a%2===0 && b%2===0 ? "both even" : "not both even";
    console.log(c);
}(4,6));    

//currying functions
function myfunction6(a)
{
    return function(b)
    {
        var c=a+b;
        console.log(c);
    }
}
var add5=myfunction6(5);
add5(10);

//pure functions
function myfunction7(a,b)
{
    return a*b;
}
var result2=myfunction7(4,5);
console.log(result2);

//asynchronous functions
function myfunction8(a,b,callback)
{    setTimeout(function()
    {
        var c=a/b;
        callback(c);
    },2000);
}
myfunction8(100,5,function(result)
{
    console.log(result);
});
