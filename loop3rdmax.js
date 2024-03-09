const input = require("readline-sync")
let n = input.questionInt("enter number: ");
max1=0
max2=max1
max3=max2

i=0

while(i<n){
    let num=input.question("enter the values: ")
    while (max1<num) {
        max3=max2;
        max2=max1;
        max1=num;
    }
    while (max2<num) {
        max3=max2
        max2=num
    }while (max3<num) {
        max3=num
    }
    i++;

}
console.log(max3);