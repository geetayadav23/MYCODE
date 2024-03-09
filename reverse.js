const input = require("readline-sync")
let n = input.questionInt("enter the number")
s=0;
while(n>0){

p=n%10;
n=Math.floor(n/10)
s=(s+p)*10
}
s=Math.floor(s/10)

console.log(s);