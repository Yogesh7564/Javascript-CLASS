/*function sum(a,b,c){
    return a+b+c
}
console.log(sum(1,2,3))
console.log(sum(10, 20, 30))
*/

/*
let res=(a)=>(b)=>(c)=>a+b+c;
console.log(res(10)(20)(30))
*/
/*
function add(a){
    return function(b){
        return function(c){
                return a+b+c
            }
        }
    }
console.log(add(10)(20)(30))
*/



// Benefits of Currying

/*
const mul=(a)=>(b)=>a*b
console.log(mul(2)(3))
*/


/*
let greet=(greet)=>(name)=>greet+" "+name
let sayhello = greet("Hello")
console.log(sayhello("john"))
console.log(sayhello("Alice"))
*/

const discount= rate => price  => price -(price*rate);
let fiftypercent = discount(0.50);
console.log(fiftypercent(500));