const input = require("readline-sync")
let n = input.questionInt("enter the number")
let t=n;
let sum=0;
while(t>0){
    m=t%10;
    t=Math.floor(t/10);
    sum=sum*10+m
}
if(sum==n){
    console.log("palindrom number");
}
else{
    console.log("not palindrom number");
}