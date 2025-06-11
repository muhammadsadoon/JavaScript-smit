// program no 1 : Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
document.write("<h2>program no 1</h2>");
var city = "Hayderabad";
var replace_city = city.replace("Hayder", "Islam");
document.write(replace_city)

// program no 2 : Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
document.write("<h2>program no 2</h2>");
var str = "472";
var change_str = Number(str);
document.write("Value :", str, "<br> type :", typeof str, "<br>Value :", change_str, "<br> type :", typeof change_str)

// program no 3 : Write a program to take password as an input from user. The password must qualify these requirements:a. It should contain alphabets and numbersb. It should not start with a numberc. It must at least 8 characters lond. If the password does not meet the above requirements, prompthe user to enter a valid password. For character codes of a-z,A-Z & 0-9
document.write("<h2>program no 3</h2>");
var user = prompt("enter the password for check strongest or not..!");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterU = [];
var characterL = [];
for (var i = 65; i <= 122; i++) {
    if ((i > 64 && i < 91)) {
        characterU.push(String.fromCharCode(i))
    } else if (i > 96 && i < 123) {
        characterL.push(String.fromCharCode(i))
    }
}
var checkNumber = 0;
var checkUppercase = 0;
var checkLowercase = 0;
var checkNotInput = 0;
if (user !== "") {
    for (let j = 0; j < user.length; j++) {
        if (characterU.indexOf(user[j]) !== -1) {
            checkUppercase++;
        } else if (characterL.indexOf(user[j]) !== -1) {
            checkLowercase++;
        } else if (number.indexOf(user[j]) !== -1) {
            checkNumber++;
        } else {
            checkNotInput++
        }
    }
} else {
    document.write("Please enter password")
}

document.write("<br>The user input is :", user)
document.write("<br>the strong password is number:", checkNumber)
document.write("<br>the strong password is uppercae:", checkUppercase)
document.write("<br>the strong password is lowercase:", checkLowercase)
document.write("<br>the strong password is special character are not allowed:", checkNotInput)
document.write("<br>the strong password is length:", user.length)

// program no 4: the email validation are same for program number 3
document.write("<h2>program no 4</h2>");
document.write("Email validation are same to program number 3")

// program no 5: Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
document.write("<h2>program no 5</h2>");
var num_1 = 3.45214;
document.write("<br>number :", num_1)
document.write("<br>round :", Math.round(num_1))
document.write("<br>floor of :", Math.floor(num_1))
document.write("<br>ceil :", Math.ceil(num_1))

// program no 6: Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
document.write("<h2>program no 6</h2>");
var dice_1 = Math.round(Math.random() * 6 + 1)
var dice_2 = Math.round(Math.random() * 6 + 1)
document.write("<br>dice 1:", dice_1)
document.write("<br>dice 2:", dice_2)

// program no 10: Write a program that round a number to a given decimal places.
document.write("<h2>program no 10</h2>");
var num_2 = 16.765
var num_3 = 12.32151
var num_4 = -923.215934
document.write(num_2.toFixed(2), "---> 2<br>")
document.write(num_3.toFixed(2), "---> 2<br>")
document.write(num_4.toFixed(4), "---> 4<br>")

// program no 11: Write a program to take input of a Number and find a Mean of All Digits
document.write("<h2>program no 11</h2>");
var mean_1 = prompt("Enter the mean number ");
var arr = [];
for (var k = 0; k < mean_1.length; k++) {
    arr.push(mean_1[k])
}
var sum = 0;
console.log(arr)
for (let sumNumber = 0; sumNumber < arr.length; sumNumber++) {
    sum += Number(arr[sumNumber]);
}
console.log("sum:",sum)
var calculation = Math.round(sum / arr.length);
document.write("The number is ", mean_1, " and mean is :", calculation)

// program no 12: Write a program that shows the message “First fifteen days of the month” if the date is less than the 16th of the month else shows “Last days of the month”.
document.write("<h2>program no 12</h2>");
var date = new Date("01 June 2025");
var today = new Date()
var btime = date.getTime();
var Ttime = today.getTime();
var calculation_2 = Math.floor((Ttime - btime) / (1000 * 60 * 60 * 24))
console.log(calculation_2)
if (calculation_2 > 15) {
    document.write("Last days of the month")
} else {
    document.write("first fifteen days of the month")
}

// program no 13: 
document.write("<h2>program no 13</h2>");
var date = new Date("10 June 2025 09:00:00");
var today = new Date()
var btime = date.getTime();
var Ttime = today.getTime();
var calculation_3 = Math.floor((Ttime - btime) / (1000 * 60 * 60))
console.log(calculation_3)
document.write("Current date:", new Date())
document.write("<br>Miliseconds since 1 jun 1970s date:", new Date().getTime())
document.write("<br>minets since 1 jun 1970s date:", (new Date("10 June 2025 09:00:00")) / (1000 * 60))

// program no 14: 
document.write("<h2>program no 14</h2>");
var date = new Date("10 June 2025 09:00:00");
var today = new Date()
var btime = date.getTime();
var Ttime = today.getTime();
var calculation_4 = Math.floor((Ttime - btime) / (1000 * 60 * 60))
console.log(calculation_4)
document.write("Current date:", new Date())
document.write("<br>", calculation_3, "hour ago, It was date:", new Date("10 June 2025 09:00:00"))

//program no 15: enter the user input years
document.write("<h2>program no 15</h2>");
var user_2 = prompt("Enter the birth year");
var userYear = new Date("01 jan " + user_2);
var year = Math.floor((today.getTime() - userYear.getTime()) / (1000 * 60 * 60 * 24 * 31 * 12));
document.write("Your age is:", year);
document.write("<br>year year is :", userYear.getFullYear())