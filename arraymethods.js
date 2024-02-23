// every() :  It checks whether all elements satisfies the given condition
let arr = [1, 2, 3, 4, 5]
let all = arr.every((e) => e<10)
console.log(all)

console.log("----------------------------------")

//some() : It checks whether any of the elements satisfies the given condition
let some = arr.some((e) => e===3)
console.log(some)

console.log("----------------------------------")

//find() : It returns the value of the first element that passed a test.
let first = arr.find((e) => e>=2 )
console.log(first)
//findLast() : It returns the value of the last element that passed a test.
//findIndex() : It returns the index of the first element that passed a test.
//findLastIndex() : It returns the index of the last element that passed a test.

console.log("----------------------------------");

//reverse() : It reverse the array
let revArr = arr.reverse()
console.log(revArr)

//sort()  : It sorts the elements of an array based on the strings
let ar = ['paneer', 'chicken', 'meat', 'seafood']
let sortedAr = ar.sort()
console.log(sortedAr)
let array = [25, 100, 32, 56]

function sorting(a, b){
    return a-b
}
let sortedArr = array.sort(sorting)
console.log(sortedArr)