//while loop
let x=0;
while(x<10){
    console.log(x)
    x++;
}

console.log("--------------------------")

//do-while loop
let y=0;
do{
    console.log(y)
    y++;
}while(y<10)

console.log("--------------------------")

//for-loop
for(let x=1;x<=10;x++){
    console.log(x);
}

console.log("--------------------------")

//for....of loop
let array = ['Gaurav', 'Somu' , 'Deepak', 'Sadanand']
for(let a of array){
    console.log(a);
}

console.log("--------------------------")

//for.....in loop: It is used to iterate properties of an objects

let user = {
    name : 'Gaurav',
    age : '26',
    gender : 'Male'
}

for(let i in user){
    console.log(i + " " + user[i])
}
