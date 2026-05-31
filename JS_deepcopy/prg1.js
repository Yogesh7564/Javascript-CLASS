let original={
    name:"virat",
    address:{
        city:"Bangalore"
    }
}
let deepcopy=JSON.parse(JSON.stringify(original))

deepcopy.address.city="Mysore"

console.log(original.address.city)
console.log(deepcopy.address.city)
