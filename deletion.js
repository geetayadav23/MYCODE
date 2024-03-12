const input=require("readline-sync")
let n=input.questionInt("enter the number")
let place=input.questionInt("enter the place")
array=[]
i=0
while(i<n){
    let a=input.questionInt("enter number")
    array[i]=a
    i++;
}
i=place
while (i<n-2) {
  array[i] =array[i+1] 
  i++;
}

i=0;
while (i<n-1) {
    
console.log(array[i]);
i++;
}