let obj1={
    id:18,
    name:'virat',
    gender:'male'
}
console.log(obj1)
let obj2={
    ...obj1,
    Email:'virat@gmail.com',
    age:35,
    city:'delhi'
}
console.log(obj2)

let num1=[10, 20, 30, 40]
console.log(num1)

let num2=[...num1,50,60,70,80,90]
console.log(num2)