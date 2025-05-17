// program no 1 :Write a program to check whether the given input number is divisible by 3 or else show a message “Number is not divisible by 3”.

var num_1 = Number(prompt("Enter the number for divide by 3"));
if (num_1 % 3 == 0) {
    console.log("the number", num_1, " is divide by 3:", num_1 / 3);
} else {
    console.log("Number is not divisible by 3");
}

// program no 2: Write a program that checks whether the given input is an even number or an odd number.

var num_2 = Number(prompt("Enter the number for even and odd"));
if (num_2 % 2 == 0) {
    console.log("the your number is", num_2, "even");
} else {
    console.log("the your number is", num_2, "odd");
}

//program no 3: Write an if/else statement with the following condition: If the variable age is greater than 18, output "Old enough", otherwise output "Too young".

var num_3 = Number(prompt("Enter the your age in number:"));
if (num_3 > 18) {
    console.log("Old enough");
} else {
    console.log("Too young");
}

//program no 4: Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the same as yours. If the name entered by the user is anything other than your name, your code should not produce any output.

var uname = "sadoon";
var user_name = prompt("Enter your name:");
if (user_name == uname) {
    console.log("YOY!", user_name, "It's great to see you");
}

//program no 5:Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var time = Number(prompt("Enter the number for time"));
if (time >= 0 && time < 1200) {
    console.log("good moring");
} else if (time >= 1200 && time <= 1700) {
    console.log("Good afternoon");
} else if (time >= 1700 && time <= 2100) {
    console.log("Good evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night");
}

// program no 6: Write a program that a. Store correct password in a JS variable. b. Asks user to enter his/her password c. Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

var password = "Sadoon123";
var user_password = prompt("Please Enter the passowrd");
if (user_password !== "") {
    if (user_password == password) {
        console.log("the password is correct..!");
    } else {
        console.log("the password is not correct..!");
    }
} else {
    console.log("please enter the password");
}

// program no 7: Write a program that adds an else statement to the following script to display “You are not Fahad” var firstName = "Ali"; if (firstName === "Fahad") {  document.write("Hello Fahad!"); }

var firstName = "Ali";
if (firstName === "Fahad") {
    console.log("Hello Fahad!");
} else {
    console.log("You are not Fahad")
}

//program no 8:This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  } 

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
} 

//program no 9:Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var num_4 = Number(prompt("Enter the number to equal first"));
var num_5 = Number(prompt("Enter the number to equal second"));

if(num_4==num_5){
    console.log("the number are same..")
}else{
    console.log("the number are not same..")
}


// program no 10:Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var num_6 = Number(prompt("Enter the number for check the number are positive or nagetive"));

if(num_6>0){
    console.log("the number is positive..");
}else if(num_6 == 0){
    console.log("the number is equal to zero..");
}

//program no 11: Write a program that stores value in a variable & tell whether the type of that variable is a "number", "string", "boolean" or “undefined” 

var a = 12;
var b = "string";
var c = true;
var d;
console.log("the a is",typeof a, "\nthe 'b' is",typeof b ,"\nthe 'c' is",typeof c ,"\nthe 'd' is",typeof d);

//program no 12:Write a program that takes a character (i.e. string of length 1)  and returns true if it is a vowel, false otherwise. 
var user_input = prompt("enter the character");
if(user_input=="a"||user_input=="e"||user_input=="i"|| user_input=="o"|| user_input == "u"){
    console.log("the character is vowol word",user_input);
}else{
    console.log("the character is not vowol word",user_input);
}

//program no 13: Choose the correct comparison operator to display "true", when: 10 is NOT equal to 8. 

if(10 !== 8){
    console.log("10 is NOT equal to 8");
}