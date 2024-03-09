
const input = require("readline-sync");
let n = input.questionInt("enter the number: ");
let array=[]
i=0;
while (i<n) {
   let a= input.questionInt()
   array[i]=a;
   i++;
}
i=0;
while(i<n) {
    console.log(array[i]);
    i++;
}