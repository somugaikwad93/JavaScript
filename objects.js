// with the help of literals
let emp = {
    name : 'Praveen',
    empid : '102' ,
    blood_group : 'B +ve'
}
console.log(emp.name + " " + emp.empid + " " + emp.blood_group)

// with the help of contructor function
function empdetails(name , empid, blood_group){
    this.name = name;
    this.empid = empid;
    this.blood_group = blood_group
}
let emp1 = new empdetails('Praveen', '102', 'B +ve')
console.log(emp1.name + " " + emp1.empid + " " + emp1.blood_group)

// with the help of class
class Employee{
    constructor(name , empid, blood_group){
        this.name = name
        this.empid = empid
        this.blood_group = blood_group
    }
    
    addToCart(){
        console.log(`Employee name is ${this.name}`)
    }
}
//instance of the class
let emp2 = new Employee('Praveen','102','B +ve')
console.log(emp2.name + " " + emp2.empid + " " + emp2.blood_group)
emp2.addToCart();