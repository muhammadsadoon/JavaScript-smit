//program no 1:
console.log("******************************************************************")
console.log("program no 1:")
var arr_1 = [1,"string", true];

//program no 2:
console.log("******************************************************************")
console.log("program no 2:")
var arr_2 = ["zong","ufone","jazz","talenore"];

//program no 3:
console.log("program no 3:")
console.log("******************************************************************")
var arr_3 = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
console.log(arr_3);

//program no 4:
console.log("program no 4:")
console.log("******************************************************************")
var arr_4 = [];
console.log("Top movies of 2025");
arr_4.push("Avengers: Age of Ultron");
arr_4.push("Spectre");
arr_4.push("Jurassic world");
arr_4.push("Inside Out");
console.log("1)",arr_4[0],"\n2)",arr_4[1],"\n3)",arr_4[2],"\n4)",arr_4[3])
console.log("Lenght of array is:",arr_4.length);

//program no 5:
console.log("******************************************************************")
console.log("program no 5:")
console.log("favorite cars");
var arr_5 = ["Audi","farari","vigo","lamborghini"];
console.log("\n",arr_5[0],arr_5[1],arr_5[2])
var firstIndex = arr_5.indexOf("Audi");
console.log("first index of array",firstIndex);
console.log("car first index of array",arr_5[0]);
var lastIndex = arr_5.lastIndexOf("lamborghini");
console.log("first index of array",lastIndex);
console.log("car first index of array",arr_5[3]);


//program no 6:
console.log("******************************************************************")
console.log("program no 6:")
var arr_6 = ["ali","saad","ahmed"];
var marks = [320,230,480];
console.log("Scroe of",arr_6[0],"is",marks[0],"Peersentage:",marks[0]*100/500,"%")
console.log("Scroe of",arr_6[1],"is",marks[1],"Peersentage:",marks[1]*100/500,"%")
console.log("Scroe of",arr_6[2],"is",marks[2],"Peersentage:",marks[2]*100/500,"%")

//program no 7:
console.log("******************************************************************")
console.log("program no 7:")
var arr_7 =["blue","white","black","yellow"];
console.log("pervious:"+arr_7)
var user = prompt("Enter the color");
arr_7.push(user)
console.log("update:"+arr_7)
arr_7.unshift("gray")
console.log("update:"+arr_7)
arr_7.unshift("yellow")
console.log("update:"+arr_7)
arr_7.shift();
console.log("Delete the first array item"+arr_7);
arr_7.pop();
console.log("Delete the last array item"+arr_7);
var suser = prompt("which to delete the start index the array");
var euser = prompt("which to delete the end  index the array");
var uuser = prompt("which to delete the update index the array");
var updateArray = arr_7.splice(suser,euser,uuser);
console.log(updateArray)
console.log(arr_7);


//program no 10:
console.log("******************************************************************");
console.log("program no 10:")
var arr_10 = ["karachi","lahore","islamabad","faslabad","hybrabad"];
console.log("Cities:\n"+arr_10);
console.log("Selected Cities:\n"+arr_10[0],arr_10[1],arr_10[3]);

//program no 11:
console.log("******************************************************************");
console.log("program no 11:")
var arr_11 = ["This","is","cat","my"];
console.log(arr_11);
console.log(arr_11[0],arr_11[1],arr_11[3],arr_11[2])
//program no 12:
console.log("******************************************************************");
console.log("program no 12:")
var arr_12 = ["keyboard","mouse","printer","moinitor"];
console.log(arr_12);
var data_1 = arr_12.shift()
console.log(data_1)
var data_1 = arr_12.shift()
console.log(data_1)
var data_1 = arr_12.shift()
console.log(data_1)
var data_1 = arr_12.shift()
console.log(data_1)

//program no 13:
console.log("******************************************************************");
console.log("program no 13:")
var arr_12 = ["keyboard","mouse","printer","moinitor"];
console.log(arr_12);
var data_1 = arr_12.pop()
console.log(data_1)
var data_1 = arr_12.pop()
console.log(data_1)
var data_1 = arr_12.pop()
console.log(data_1)
var data_1 = arr_12.pop()
console.log(data_1)

//program no 14:
console.log("******************************************************************");
console.log("program no 14:")
var arr_14 = [
    [1,2,3],
    [3,2,1],
    [3,6,4],
]
console.log("\n",arr_14[0][0],arr_14[0][1],arr_14[0][2],"\n",arr_14[1][0],arr_14[1][1],arr_14[1][2],"\n",arr_14[2][0],arr_14[2][1],arr_14[2][2],"\n")

//program no 15:
console.log("******************************************************************");
console.log("program no 15:");
var arr_15 = ["ali","ahmed","saad"];
console.log("First index of array:",arr_15.shift())
console.log("last index of array:",arr_15.pop())

//program no 16:
console.log("******************************************************************");
console.log("program no 16:");
var arr_16 = ["ali","ahmed","saad"];
console.log(arr_16);
arr_16.length = 0;
console.log(arr_16.length)

//program no 17:
console.log("******************************************************************");
console.log("program no 17:");
var uinput = prompt("Enter the item");
var arr_17 = ["html","css","php"];
if(arr_17.indexOf(uinput)== -1){
    console.log("your item is not found...")
}else{
    console.log("your item is found...")
}

//program no 18:
console.log("******************************************************************");
console.log("program no 18:");
var arr_18 = ['zabra',"deer"];
console.log(arr_18)
arr_18.push("lion")
arr_18.push("cow")
console.log(arr_18)