let arr = [1, 2, 3]

let arr1 = arr.map((e) => {
    return e*2
})
console.log(arr1)

function far(farh){
     return (farh-32) * 5/9 ;
}

let farArr = [32, 48]
let celArr = farArr.map(far);
console.log(celArr)