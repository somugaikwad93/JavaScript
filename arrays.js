let lang = ["JAVA","JavaScript","Python"]
console.log(lang)

// 1. push() : It is used to add an extra element at the end of the array
lang.push("C#");
console.log(lang)

// 2. pop() : It is used to remove a last element from an array
lang.pop()
console.log(lang)

// 3. shift() : Removes the first element from an array and returns it.
lang.shift()
console.log(lang)

// 4. unshift() : It is used to add an element at the start of an array
lang.unshift("JAVA")
console.log(lang)

// 5. splice : It is used to delete the elements from zero th position and if necessary, inserts new elements in their place
// 1st parameter states the start of an array
// 2nd parameter stated the number of elements to be removed
// next all params is required to replace the deleted elements
let arr = [2, 4, 6, 8, 10]
arr.splice(0, 2, 5, 6)
console.log(arr)

// 6. slice : It creates substring of an array. 
// 1st param states the start of an array
// next param stated the end of an array [non inclusive]
let num = [1, 2, 3, 4, 5]
console.log(num.slice(0,2))

// 7. concat : joining 2 arrays
let a = ['a', 'b', 'c', 'd']
let b = [1, 2, 3, 4]
console.log(a.concat(b))

// 8. indexOf : returns the index of a given element
let fruits = ['apple', 'banana', 'kiwi']
console.log(fruits.indexOf('apple'))

// 9. includes : check if the given element is present in the array
let animals = ['cat', 'dog', 'elephant', 'donkey']
let flag = animals.includes('cat')
console.log(flag)

// 10. forEach()
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9]
n.forEach(e => {
    console.log(e)
});