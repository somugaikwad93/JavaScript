var myArr = ['Somanath Gaikwad', 27, 'Male']
console.log(myArr)

//Nest Arrays
var myArr = [['Somanath Gaikwad', 26] , ['Praveen Patil', 27]];
console.log(myArr)

//Modify Arrays
var myArr = [2, 5, 4];
myArr[1] = 3;
console.log(myArr)

//Access Nested arrays elements
var myArr1 = [['Dog',2],['Cat',3],['Betta', 4]]
console.log(myArr1[0][1]);

//push()
myArr1.push(['Elephant',5])
console.log(myArr1)

//pop()
myArr1.pop();
console.log(myArr1)

//shift()
myArr1.shift();
console.log(myArr1);

//unshift()
myArr1.unshift(['Dog', 2])
console.log(myArr1)
