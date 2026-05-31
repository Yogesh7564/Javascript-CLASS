let numbers=[1,2,[3,4]]

let deepCopyNumbers=JSON.parse(JSON.stringify(numbers))

deepCopyNumbers[2][0]=99

console.log(numbers)
console.log(deepCopyNumbers)
