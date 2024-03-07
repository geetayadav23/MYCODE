const input = require("readline-sync");
let n = input.questionInt("enter the number: ");

i=1;
s=0;
while (i<=n) {
   if(i%2!=0)
   {s=s+i}
   i++;
} 
{
console.log(s);
}