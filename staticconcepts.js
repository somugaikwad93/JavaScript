class Employee{
    constructor(name, empId, salary){
        this.name = name;
        this.empId = empId;
        this.salary = salary;
    }
    static company = 'IBM';
    empInfo(){
        console.log(this.name + " " + this.empId + " " + this.salary)
    }
    static companyInfo(){
        console.log("Company name is : " + this.company)
    }
}
const e1 = new Employee("Somu", 112, 40000)
e1.empInfo();
console.log(Employee.company)
Employee.companyInfo()


// non-static variable or functions are called by object reference
// static variable or functions are called by class