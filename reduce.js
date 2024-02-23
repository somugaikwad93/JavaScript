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