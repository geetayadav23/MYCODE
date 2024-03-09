const input = require("readline-sync")
let Unit = input.questionInt("enter the number")
if (Unit<=50) {
    b=Unit*0.50
    surcharge=b*20/100
    tb=b+surcharge

    console.log(tb);
} 
else if(Unit<=150){
    b=25+(Unit-50)
    surcharge=b*20/100*0.75
    tb=b+surcharge

    console.log(tb);
}
if (Unit<=250) {
    b=100+(Unit-150)*1.20
    surcharge=b*20/100
    tb=b+surcharge

    console.log(tb);

} else {
    b=220+(Unit-250)*1.50
    surcharge=b*20/100
    tb=b+surcharge

    console.log(tb);
}
