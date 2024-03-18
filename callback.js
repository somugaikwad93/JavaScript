console.log("Start")
setTimeout(function(){
    console.log("Time Out")
} , 3000)
console.log("End")


function printInfo(name, callback){
    console.log(name)
    setTimeout(function(){
        callback();
    }, 3000)
    console.log(name)

}

function details(){
    console.log("Details....!!!")
}

printInfo('Gaurav', details)
