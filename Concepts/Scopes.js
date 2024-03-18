var globalVar = 'Global'

function func1(){
    /* It is  local variable but since we have not used var keyword it is behaving as global.
    If we would have used the var keyword then it would have behaved as local variable.
    */
    oopsVar = 'Oops'
}

function func2(){
    if(typeof globalVar != 'undefined'){
        console.log("Global Var: " + globalVar);
    }
    if(typeof oopsVar != 'undefined'){
        console.log("Local Variabe without var keyword: " + oopsVar);
    }
}

func1()
func2()

// local var in functions
function func3(){
    var localVar = 'local'
    console.log(localVar)
}
func3();

//console.log(localVar)

var cloth = 'T-Shirt';
function func4(){
    var cloth = 'Sweater';
    return cloth;
}
console.log(func4())
console.log(cloth)