const numbers=[1,2,3,4,5,6,7,8,9]
const[first,second,...rest]=numbers
console.log(first)
console.log(second)
console.log(rest)

//example 2
var person={
    name:"virat",
    age:35,
    city:"bombay",
    gender:"male"
}
const{name,age,...data}=person
console.log(name)
console.log(age)
console.log(data)
