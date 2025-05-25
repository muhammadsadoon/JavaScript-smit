var user_input = prompt("enter the character");
if (user_input !== "") {
    var validation_1 = /[A-Z]/g;
    var validation_2 = /[a-z]/g;
    if(user_input.match(validation_1)||user_input.match(validation_2)){
        if (user_input == "a" || user_input == "A" || user_input == "e" || user_input == "E" || user_input == "I" || user_input == "i" || user_input == "o" || user_input == "O" || user_input == "u"|| user_input == "U") {
            console.log("the character is vowol word", user_input);
        } else {
            console.log("the character is not vowol word", user_input);
        }
    }else{
        console.log("invalid input (only characters)");
    }
}