//if-else
function checkAge(age){
    if(age >= 18){
        console.log("You are eligible to vote!")
    }
    else{
        console.log("You are not eligible")
    }
}
checkAge(20)

//if-else-if
function checkGrade(score){
    let grade;
    if(score>=90){
        grade = 'A';
    }
    else if(score>=80){
        grade = 'B';
    }
    else if(score>=70){
        grade = 'C';
    }
    else{
        grade = 'D'
    }
    return grade;
}
console.log(checkGrade(80))

//switch
function weekDay(dayNumber){
switch (dayNumber) {
    case 0:
        day = 'Sunday'
        break;
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 0:
        day = 'Saturday'
        break;
    default:
        day = "Invalid Input!"
        break;
}
return day;
}

console.log(weekDay(10));