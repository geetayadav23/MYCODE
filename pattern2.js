const input = require("readline-sync")
let n = input.questionInt("enter the number of rows")
i=1;
s=""
while(i<=n){
    j=1;
    while(j<=i){
    s+=("*")
j++;
    }
    s+=("\n")
    i++;
}
console.log(s)