const input = require("readline-sync")
let a = input.questionInt("enter the number")
let b = input.questionInt("enter the number")
g = a+b
s = a-b
m = a*b
d = a/b
c = Math.floor(a/b)
k = a%b

console.log(g,s,m,d,c,k)
