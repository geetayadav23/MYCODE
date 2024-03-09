const input=require("readline-sync")
let n= input.questionInt("enter the size: ")
let array= []
even=0;
odd=0;
i=0
while (i<n) {
  let a =input.questionInt("enter the number: ") 
  array[i] = a
  i++;
}
i=0;

    while(i<n){
    if(array[i]%2==0){
      even = even+array[i]
      
      
    }
    else
    odd=odd+array[i]
    
    i++

}


console.log(even);
console.log(odd);

