const input = require("readline-sync")
let n = input.questionInt("enter the number of rows ; ")
i=0;
s=""
while (i<=n) {
    j=1

    while (j<=i) {
        s+=(j)
        j++;
    }
    j=i-1
    while (j>0) {
        s+=(j)
        j--
    }
    s+=("\n")
    i++
}
console.log(s);