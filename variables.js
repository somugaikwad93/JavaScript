//var was used before JS ES6, after JS ES6 we are using let keyword
//scope of var is globally and functionally, scope of let is block level
//the value of const never gets changed or update after initialization


var x = 10;
function test(){
    x = 20;
}
test()
console.log(x)

if(true){
    var x=30;
}
//var x has been re-initialized in the if block hence it can be accessed out of the if block
console.log(x)

// but let has scope of block level hence it cannot be accessed out of the block, see code snippet

let y = 10;
if(true){
    let y=20;
}
console.log(y)

// const should be initialized at the time of declaration other wise it gives error but for var and let it is not require to initialize while declaring
//if we don't initialize var and let then it gives the undefined output.

let r;
console.log(r)

var s;
console.log(s)
