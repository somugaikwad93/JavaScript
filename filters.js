let employee = [
    {name:'somu', gender:'male'},
    {name:'alia', gender: 'female'}
]
let emp = employee.filter((e) => {
    return e.gender === 'male'
})
console.log(emp)

console.log("-----------------------------------")

let fruits = [
    {name:'banana', status:'good'},
    {name:'apple', status:'not good'}
]

function goodFruit(fruitName){
    return fruitName.status === 'good'
}

let goodFruitName = fruits.filter(goodFruit);
console.log(goodFruitName)