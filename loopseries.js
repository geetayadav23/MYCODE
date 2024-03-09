const input = require("readline-sync");
let n = input.questionInt("enter the  number: ")
i=1
s=0
while (i<=n) {
    g=1/i
    s+=g
    i++;
}
console.log(s);

