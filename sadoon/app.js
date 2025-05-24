// var skill = ["html","css","javascript"];
// var bio = ["sadoon",11,"skill"];
// var user = prompt("Enter the skill");

// if('object' == typeof bio[0] || 'object' == typeof bio[1] || 'object' == typeof bio[2] ){
//     console.log("the skill are true")
//     if(
//         user == bio[0][0] ||
//         user == bio[0][1] ||
//         user == bio[0][2] ||
//         user == bio[1][0] ||
//         user == bio[1][1] ||
//         user == bio[1][2] ||
//         user == bio[2][0] ||
//         user == bio[2][1] ||
//         user == bio[2][2] 
//         ){
//             console.log("your data is true");
//         }else{
//             console.log("your data are false")
//         }
// }else{
//     console.log("the skill are not found");
// }

let arr = [1,2,3,4,5,6,7,8,9,10];
let c = arr.splice(0,5,"343");
let check = arr.splice(1,3,200)
console.log(check);
console.log(arr);

