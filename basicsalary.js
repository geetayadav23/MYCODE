const input = require("readline-sync")
let bs = input.questionInt("enter the number")
if (bs<=10000) {
    HRA=bs*20/100
    DA=bs*80/100
    TS=bs*+HRA+DA

    console.log(TS);
}
else if(bs<=20000){
    HRA=bs*25/100
    DA=bs*90/100
    TS=bs+HRA+DA

    console.log(TS);
}
else {
    HRA=bs*30/100
    DA=bs*90/100
    TS=bs+HRA+DA

    console.log(TS);
}

