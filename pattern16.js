const input = require("readline-sync")
let n = input.questionInt("enter the number of rows")
i=1;
s=""
while (i<=n) {
   j=1
   while (j<=n) {
    s+=("*")
    j++;
   } 
   s+=("\n")
   i++;
}
console.log(s);