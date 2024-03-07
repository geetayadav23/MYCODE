const number = require("readline-sync")
let n = number.questionInt("enter the number of rows: ")
i=0;

while(i<=n){
   let s="";
    let j=1;
    while(j<=n-i){
        s+="*"
        j++;
    }
    console.log(s)
    i++;
}

