const input = require("readline-sync")
let n= input.questionInt("enter the number")
let a= input.questionInt("enter the number")
var i=2
var max=a, min=a;

while(i<=n){
    var b= input.questionInt("enter the number")
    if(max<b){
        var t= max;
        max=b;
        b=t;
    
    }
    if(min<b){
        min= b;
    }
    i=i+1;
}
console.log(min)


