/*for allocating memory for any value or datatype we use keywords - let , var and const
in other words for declear any variable we use these keywords

var-------------
first we declare a variable and give the name or give identifire and then we assign a value in it that can
be any kind of datatypes like this
var age=65; 
we use this way for the long period of time but with var there was some issue
with var we can redeclare and reassign  same variable in same scope it means var 
does not follow block and scope concept . which is problematic , maintain and debug 
code.
and also during hoisting when we want to access any variable before create it var does not give any error
so in 2015 there happened major change in it by introdusing let and const keyword to solve these problems

const----------
const age=98;
with const we can not redeclare and reassign  same variable in same scope but sometimes we need to reassign
the variable value , for this we use 
let-----------
let age=65l



now avoid to use var , use let and const is a good practice*/