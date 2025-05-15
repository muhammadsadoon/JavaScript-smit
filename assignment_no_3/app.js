var password = prompt("Enter the password");

if (password !== "") {
    if (password === '111') {
        var cash = +prompt("welcome back sir ahmed!\n please enter the cash amount to withdraw..\n a)500 b)1000 \n c)2000 d)5000 \n note: Please enter the amount between those options");
        if(cash === 500 || cash === 1000 || cash === 2000 || cash === 5000){
            console.log("thank you for withdraw sir ahmed!\n cash:",cash, "\nNote:please receive the amount on next bank 😁😁");
        }else{
            console.log("your cash is not eligable...");
        }
        
    } else if (password === '222') {
        var cash = +prompt("welcome back sir bilal!\n please enter the cash amount to withdraw..\n a)500 b)1000 \n c)2000 d)5000 \n note: Please enter the amount between those options");
        if(cash === 500 || cash === 1000 || cash === 2000 || cash === 5000){
            console.log("thank you for withdraw sir bilal!\n cash:",cash, "\nNote:please receive the amount on next bank 😁😁");
        }else{
            console.log("your cash is not eligable...");
        }
        
    } else {
        alert("worng password try again...!");
        console.log("wrong password try again...!");
    }
}else{
    console.log("please enter the password");
}