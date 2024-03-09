const input = require("readline-sync");
let n = input.questionInt("enter the size of array: ")
let array=[];
let i=0;
while(i<n)
{
    array[i]=input.questionInt("enter the number: ")
    i++;
}
i=0;
while(i<n)
{
 let j=i+1
    let p=1;
     while(j<n)
     {
        if(array[i]==array[j])
        {
            console.log(array[j]);
            k=j;
            p++;
          while(k<n-1)
          {
            array[k]=array[k+1];
            k=k+1
          }
          n=n-1;
        }
        else{
            j++;
        }
        
     }
     i++;
}


