//loops
//Arary is a container they hold multiple pieces of data.
var student_Name = ["Alishba", "Maheen", "Hooriya", "Huzaifa", "mansha"];
console.log(student_Name);
//print the all student name
//functions of array
//.puch()
//.push() add element in the last of arry
student_Name.push("Huziafa");
console.log(student_Name);
//.pop() is used to delete last element in array
student_Name.pop();
console.log(student_Name);
//.unshift() add element begging of the array
student_Name.unshift("Kiran");
console.log(student_Name);
//.shift() remove first element in the array
student_Name.shift();
console.log(student_Name);
//.slice()
student_Name.slice(1, 3);
console.log(student_Name);
//.splice()
student_Name.splice(2, 4);
console.log(student_Name);
//example 2
var fruits = ["apple", "mango", "banana", "orange"];
fruits.push("grapes");
console.log(fruits);
fruits.push();
console.log(fruits);
fruits.unshift("cherry");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.splice(2);
console.log(fruits);
fruits.slice();
console.log(fruits);
//array and loop combination
var sports = ["football", "hockey", "cricket", "tennis"];
for (var i = 0; i <= sports.length; i++) {
    console.log(i);
    console.log(sports[i]);
}
;
