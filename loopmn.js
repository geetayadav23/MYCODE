const input = require("readline-sync")
let m =  input.questionInt("enter the number")
let n =  input.questionInt("enter the number")
i=1;
s=1;
while (i<=n){
  s=i+s;
  i++; 
}
console.log(s);
