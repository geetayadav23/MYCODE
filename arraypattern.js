const input=require("readline-sync")
let n= input.questionInt("enter the size: ")
let array=[]
i=0
while (i<n) {
let b = input.questionInt("enter the number: ") 
array[i] = b
i++
}
i=0
while (i<n) {
    console.log("<".repeat(array[i]));
    i++;
}
   
