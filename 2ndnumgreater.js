const input = require("readline-sync")
let a = input.questionInt("enter first number")
let b = input.questionInt("enter second number")
if (a>b) {
    console.log(a);
}
else{
    console.log(b);
}