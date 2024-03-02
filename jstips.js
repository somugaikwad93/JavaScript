// 1. get the unique elements in the array
let arr = [2, 3, 4 ,5, 5, 6, 7, 1, 2, 3, 4]
let uniqueArr = [... new Set(arr)]
console.log(uniqueArr)

// 2. convert int to String
const a = 32
const b = a + ''
console.log(b)
const c = String(a)
console.log(c)

// 3. convert float to int
const f = 32.4
const int = parseInt(f)
console.log(int)

// 4. swap variable values
let x = 12;
let y = 10;
[x,y] = [y,x]
console.log(x + " " + y)

// 5. Object has property
const person = {
    name : 'Somu',
    age : 26
}
if(person.hasOwnProperty('name')){
    console.log('Yes')
}

// 6. Convert object into array
const car = {
    name : 'tata',
    model : 'tiage',
    year : '2023'
}
// a. keys
console.log(Object.keys(car))
// b. values
console.log(Object.values(car))
// c. key-value
console.log(Object.entries(car))

