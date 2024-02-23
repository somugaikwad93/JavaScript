let items = [
    {name:'Mobile', price:34000},
    {name:'Laptop', price:42000},
    {name:'Earphones', price:8000},
    {name:'Smartwatch', price: 14000}
]
// With using function
function total(totalPrice, num){
    return totalPrice+num.price;
}

let finalAmt = items.reduce(total, 0)
console.log(finalAmt)

console.log("-------------------------------------------")

// Without using function
let Amt = items.reduce((totalPrice, num) => 
    totalPrice + num.price
, 0)

console.log(Amt)

//Example 2: Find the max element from an array
let arr = [56, 12, 6, 8, 45, 67, 62, 81]

function maxArr(max, num){
    if(num > max){
        return num
    }
    else{
        return max
    }
}

let maxEle = arr.reduce(maxArr, arr[0])
console.log(maxEle)