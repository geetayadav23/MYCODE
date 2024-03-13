const input=require("readline-sync");
let n = input.questionInt("enter number");
let k = input.questionInt("enter the  k ;");
let i =0;
array=[];
while (i<n) {
  let b=input.questionInt("enter the number");
  array[i] =b;
  i++;
}
i=0;
while (n>1) {
   r= i+k-1
   while (r>=n) {
    r=r-n;
   }
   console.log(array[r]);
   i=r;
   while (r<n-1) {
    array[r] = array[r+1];
    r++;
   }
   n--
   
}
console.log(array[0]);