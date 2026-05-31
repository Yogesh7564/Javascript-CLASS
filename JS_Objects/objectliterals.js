let person={
    name : 'virat',
    age : 36,
    city : 'Benagaluru',
    gender : 'male'
}
console.log(person)
// method 2
const car=new Object()
car.name="BMW"
car.model=2026
car.color="red"
console.log(car)

// method 3

function emp(id, name, age, city, gender){
    this.id=id
    this.name=name
    this.age=age
    this.city=city
    this.gender=gender
}
e1=new emp(101, "hari", 30, "benagaluru", "male")
console.log(e1)
e2=new emp(102, "pavan",  30, "benagaluru", "male")
console.log(e2)


