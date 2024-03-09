   
const input = require("readline-sync")
let a = input.questionInt("enter first number: ")
let b = input.questionInt("enter second number: ")
let c = input.questionInt("enter third number: ")
let d = input.questionInt("enter fourth number: ")
let e = input.questionInt("enter fifth number: ")
let f = input.questionInt("enter six number: ")
let g = input.questionInt("enter seven number: ")
let h = input.questionInt("enter eight number: ")
if (a>b) {
   l=a;
   s=b; 
} 
else {
 l=b;
 s=a;   
}
if (c>d) {
    l1=c;
    s1=d;
} 
else {
  l1=d;
  s1=c;  
}
if (e>f) {
    l2=e;
    s2=f;
} 
else {
  l2=f;
  s2=e;  
}
if (g>h) {
   l3=g;
   s3=h; 
} 
else {
  l3=h;
  s3=g;  
}
if (l>l1) {
    l4=l;
    s4=l1;
    k=s;
} 
else {
 l4=l1;
 s4=l;
 k=s1;   
}
if (l2>l3) {
   l5=l2;
   s5=l3;
   k1=s2; 
} 
else {
  l5=l3;
  s5=l2;
  k1=s3;  
}
if (s4>s5) {
    l6=s4;
    s6=s5;
} 
else {
 l6=s5;
 s6=s4;   
}
if (k>k1) {
   l7=k;
   s7=k1; 
}
 else {
    l7=k1;
    s7=k;
}
if (l6>l7) {
    console.log(l6);
}
 else {
    console.log(l7);
}

  


