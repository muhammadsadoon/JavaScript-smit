//program no 1:
document.write("<h3>program no 1:</h3>");
for (let a = 0; a < 5; a++) {
    document.write("hello world<br>");
}

//program no 2:
document.write("<h3>program no 2:</h3>");
for (let b = 1; b <= 10; b++) {
    document.write(b + "<br>");
}

//program no 3:
document.write("<h3>program no 3:table</h3>");
var print_table = +prompt("Enter a number to print its multipication table");
var print_table_limit = +prompt("Enter a number to print its multipication table");
for (let c = 1; c <= print_table_limit; c++) {
    document.write(print_table + "x" + c + "=" + print_table * c + "<br>");
}

//program no 4:
document.write("<h3>program no 4:</h3>");
var arr_1 = ["nokia", "Samsung", "Apple", "Sony", "Huawei"];
for (let d = 0; d < arr_1.length; d++) {
    document.write(arr_1[d] + "<br>");
}

//program no 5:
document.write("<h3>program no 5:</h3>");
var arr_2 = ["apple", "banana", "mango", "orange", "strawberry"]
for (let e = 0; e < arr_2.length; e++) {
    document.write(arr_2[e] + "<br>");
}
for (let f = 0; f < arr_2.length; f++) {
    document.write("Element at index " + f + " is " + arr_2[f] + "<br>");
}

//program no 6:
document.write("<h3>program no 6:</h3>");
var how_to_store_items_in_array = +prompt("prevent this page from creating additional dialogs.");
var arr_3 = [];
for (let g = 0; g <= how_to_store_items_in_array; g++) {
    var data = prompt("Enter the for index " + g)
    arr_3.push(data)
}
document.write("number of lenght", arr_3.length);
for (let h = 0; h < arr_3.length; h++) {
    document.write(arr_3[h] + "<br>");
}

//program no 7:
document.write("<h3>program no 7:</h3>");
document.write("Counting :");
for (let i = 0; i < 16; i++) {
    document.write(i, ",");
}
document.write("<br>Reverse Counting :")
for (let j = 16; j > 0; j--) {
    document.write(j, ",");
}
document.write("<br>Even :");
for (let k = 0; k < 16; k++) {
    if (k % 2 == 0) {
        document.write(k, ",");
    }
}
document.write("<br>Odd :");
for (let k = 0; k < 16; k++) {
    if (k % 2 != 0) {
        document.write(k, ",");
    }
}
document.write("<br>series :");
for (let l = 2; l < 16; l = l + 2) {
    document.write(l + "k,");
}

//program no 8:
document.write("<h3>program no 8:</h3>");
var arr_4 = ["cake", "apple", "cookie", "chips", "patties"];
var find_item_in_array = prompt("Enter the items");
var flage = false;
var find_array_index = undefined;
for (let m = 0; m < arr_4.length; m++) {
    if (arr_4[m] == find_item_in_array) {
        flage = true;
        find_array_index = arr_4.indexOf(arr_4[m])
    }
}
if (flage) {
    document.write("your ", find_item_in_array, " item are available on index", find_array_index, "in our bakery")
} else {
    document.write("your ", find_item_in_array, " item are not available on index in our bakery")
}

//program no 9:
document.write("<h3>program no 9:</h3>");
var arr_5 = [24, 53, 78, 91, 12];
document.write("Array items:", arr_5);
var dublicapte_array = arr_5.sort((a, b) => a - b)
document.write("<br>largest items:", dublicapte_array[4]);

//program no 10:
document.write("<h3>program no 10:</h3>");
var arr_5 = [24, 53, 78, 91, 12];
document.write("Array items:", arr_5);
var dublicapte_array = arr_5.sort((a, b) => a - b)
document.write("<br>smallest items:", dublicapte_array[0]);

//program no 11:
document.write("<h3>program no 11:</h3>");
var arr_5 = [24, 53, 78, 91, 12];
document.write("Array items:", arr_5);
var dublicapte_array = arr_5.sort((a, b) => a - b)
document.write("<br>largest items:", dublicapte_array[4]);
document.write("<br>smallest items:", dublicapte_array[0]);

//program no 12:
document.write("<h3>program no 12:</h3>");
var student_name = ["Ali", "Sami", "Taha", "Inam"];
var score = [58, 73, 89, 90];
document.write("<table border='2'>");
for (let n = 0; n < score.length; n++) {
    document.write("<tr>")
    document.write("<td>", student_name[n], "</td>")
    document.write("<td>", score[n], "</td>")
    document.write("</tr>")
}
document.write("</table>");

//program no 13:
document.write("<h3>program no 13:</h3>");
var scores = [12, 45, 3, 22, 34, 50];
var user_input_value = +prompt("Enter the number for find same value form scroes");
var arr_6 = [];
for (let o = 0; o <= 3; o++) {
    var user_input_value = +prompt("Enter the number for find same value form scroes index " + o)
    arr_6.push(user_input_value)
}
for (let p = 0; p < arr_6.length; p++) {
    document.write("your number items is : " + arr_6[p] + "<br>")
    if (user_input_value == arr_6[p]) {
        break;
    }
}

//program no 14:
document.write("<h3>program no 14:</h3>");
var arr_7 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let q = 0; q < arr_7.length; q++) {
    for (let r = 0; r < arr_7.length; r++) {
        document.write(arr_7[q][r])
    }
    document.write("<br>")
}

//program no 15:
document.write("<h3>program no 15:</h3>");
var user_input_number = +prompt("Enter the number for decrease the number by 0.5")
document.write("the reverse series by 0.5: ")
for (var s = user_input_number; s > -0.5; s = s - 0.5) {
    document.write(s, " , ")
}

//program no 16:
document.write("<h3>program no 16:</h3>");
for (var t = 0; t <= 20; t++) {
    if (t % 2 == 0) {
        document.write("Even :", t, "<br>")
    } else {
        document.write("Odd :", t, "<br>")
    }
}

// program no 17:
document.write("<h3>program no 17:</h3>");
document.write("the product of the odd integers from 1 to 7 is ");
var mul = 1;
for (var t = 1; t <= 7; t++) {
    if (t % 2 != 0) {
        mul = mul * t;
    }
}
document.write(mul)

// program no 19:
document.write("<h3>program no 19:</h3>");
for(var u = 0; u <= 10; u++){
    for (let v = 10; v > u; v--) {
        document.write("*")
    }
    document.write("*<br>")
}

// program no 20:
document.write("<h3>program no 20:</h3>");
document.write("<h4>a) </h4>");
for(var u = 0; u <= 10; u++){
    for (let v = 0; v <= 10; v++) {
        document.write("*")
    }
    document.write("*<br>")
}
document.write("<h4>b) </h4>");
for(var u = 10; u >= 0; u--){
    for (let v = 10; v > u; v--) {
        document.write("*")
    }
    document.write("*<br>")
}
document.write("<h4>c) </h4>");
for(var u = 0; u <= 10; u++){
    for (let v = 10; v > u; v--) {
        document.write("*")
    }
    document.write("*<br>")
}
