const input = require("readline-sync");
let n = input.questionInt("enter the n number:");
let sum  =0;
let i =0;
let array=[];
while(i<n){
    let a=input.questionInt("enter number")
    array[i]=a
    
    sum=sum+array[i]
    i++;
    

}
console.log(sum);

