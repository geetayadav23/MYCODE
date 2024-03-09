ut = require("readline-sync")
const input = require("readline-sync")
let ph = input.questionInt("enter first number")
let ch= input.questionInt("enter second number")
let bi = input.questionInt("enter third number")
let ma= input.questionInt("enter fourth number")
let co= input.questionInt("enter the number")
A= ph+ch+bi+ma+co
N= (A/500)*100
if(N>=90){
    console.log('a');
}
else if(N>=80){
    console.log('b');
}
else if(N>=70){
    console.log('c');
}
else if(N>=60){

    console.log('d');;
}
else if(N>=40){
    console.log('e');
}
else
{
    console.log('f');
}
  