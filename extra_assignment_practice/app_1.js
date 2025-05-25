//Simple Currency Converter with Validation

// var user = prompt("Please Enter Country Name: a)PKR b)IND c)US d) ")


//Job Application Filter
alert("JOB ALERT! \n JOBS:\n      ->MERN STACK DEVELOPER \n      ->PHP DEVELOPER \n      ->AI DEVELOPER ");
var interset = prompt("Are your interested for 'Job'..");

if (interset == "y" || interset == "yes") {
    var user_education = prompt("Enter the education. \na)Matric \nb)Inter \nc)batchor \nd)masters");
    var user_role = prompt("Enter your role. \na)intern \nb)junior \nc)senior \nd)manager");
    var uName;
    var uEmail;
    var uAge;
    if (uAge !== "" && user_education !== "" && user_role !== "") {
        if (user_education == "a" || user_education == "Matric" || user_education == "b" || user_education == "Inter" || user_education == "batchor" || user_education == "masters") {
            if (user_role == "a" || user_role == "intern" || user_role == "b" || user_role === "junior" || user_role == "c" || user_role == "senior" || user_role == "d" || user_role == "managar") {
                uName = prompt("Enter the name");
                uEmail = prompt("Enter the email");
                uAge = prompt("Enter your age..")
                if (uAge >= 20) {
                    console.log("your form was submitted with your information \nname:", uName, "\n email:", uEmail);
                } else {
                    console.log("your age is very small for this job")
                }
            } else {
                console.log("invalid job input...")
            }
        } else {
            console.log("Invalid Education Input..")
        }
    } else {
        console.log("fill the form first...")
    }
} else {
    console.log("As your wise!")
}
