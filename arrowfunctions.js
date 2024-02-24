let f = (a,b) => {return a-b}
console.log(f(5,4))

let a = () => 'Happy Testing!'
console.log(a())

const obj = {
    firstname : 'Somu',
    lastname : 'Gaikwad'
}

let getFullName = (fullname) => `${fullname.firstname} ${fullname.lastname}`
console.log(getFullName(obj))