const input = require("readline-sync")
let n = input.questionInt("enter the number: ")
i=1;
s=0;
while (i<=n) {
   g=n%10
   s=s+g;
   n=Math.floor(n/10) ;
}
console.log(s);
