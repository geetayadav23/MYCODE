const input=require("readline-sync")
let n=input.questionInt("enter the numeber")
let array=[]
i=0;
while (i<n) {
    let b = input.questionInt("enter")
    array[i]=b
    i++;
}
i=n-1
while (i>=0) 
    
{
    console.log(array[i]);
    i--
}
