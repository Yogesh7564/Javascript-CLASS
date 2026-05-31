let original={
    name:"virat",
    address:{
        city:"Bangalore"
    }
}
let shallowCopy=Object.assign({},original)

console.log(shallowCopy)
shallowCopy.name="Raj"
console.log(shallowCopy.name)
console.log(original.name)

shallowCopy.address.city="mysore"
console.log(shallowCopy.address.city)
console.log(original.address.city)
