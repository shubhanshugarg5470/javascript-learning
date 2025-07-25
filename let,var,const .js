/* 
we can create variable without any keywords like this 
a = "ram";
but its not good practice 


createing variable using var keyword--------------
var myname = "shubhanshu";

redeclaration---
var allow redeclaration 
var a =56;
var a =78;
console.log(a);
we get 78 
but this behaviour with var led to so many bugs.

reassignment----
var allow reassignment
var h =87;
h =98;
console.log(h);

scope--------
var respect only function boundary , var only bind with function { } or block not all block. 
because of this 
we can access variable which is present insing any block like conditional , loops or exiplicitly {}
other than function block .
because of this .

let and const introduced to solve all the problem with var */
