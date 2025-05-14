// assignment no 2: this assignment for (>,<,===,<=,>=,!=,!==) operators.

var num_1 = +prompt("Enter the first number");
var num_2 = +prompt("Enter the second number");


//program no 1: Even/Odd:~
if (num_1 % 2 == 0) {
    console.log("your first number is even :", num_1);
} else {
    console.log("your first number is odd :", num_1);
}

//program no 2: winning code (enter the number if number is eqaul to truly number and the user will won the gift):~

if (num_1 == 1234) {
    console.log("congratulions! you are win the gift");
} else {
    console.log("try agian...!");
}

//program no 3: Calculator :~

var operator = prompt("Enter the Operator"); // we need to operator first for operation

if (operator == "+") {
    console.log("the sum is : ", num_1 + num_2);
}else if(operator == "-"){
    console.log("the subtract is : ", num_1 + num_2);
}else if(operator == "/"){
    console.log("the divide is : ", num_1 / num_2);
}else if(operator == "*"){
    console.log("the multiply is : ", num_1 / num_2);
}else{
    console.log("your operator is not defind" ,operator);
}