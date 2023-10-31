/*"use strict";
whit this syntax code treat as newer version of js*/ 


// alert (3+3) we are using node js , not browser 



/*when we want to assign memory for data or store data 
in the memory we use let ,var ,comst
or
 we give space for any data in the memory . we can call this memory space as
contaner where we can store data  


first declare a memory space (const or let)
         const --data value of this comtaner can never change
         let ----data value of this contaner can change
then give a name(identifier) of the contaner 
        there are many rule to declare a name  
           1. letter ,digit, underscore and $ are allowed
           2. must begun with _ and $ and letter . mever start with number
           3. js reserverd word are not allowed
           4. g and G are not same .javascript is a case sensetive*/

const name="shubhanshu"
let englishMark=78
var mathMark=90

// let 5man= "group"
// console.log(5man);
// its not  allowed 


/*and then we assign a value (wich is a datatype) 
we classify  datatype in two type 
 1.primitive data type       2.refference datatype
 
primitive datatype---
nn bb ss u (shortcut for learn)
1.mull ==> is a standalone value 
2.number 
3. boolian 
4.bigimt
5. strimg
6.symble ==> for uniqness
7.undefimd*/

let chahalMark=null; 
let mark=90;
let student="rohit";
let check=true;
// can also be false 
let classMark=BigInt("98764764847604948746");
let sachin=Symbol("classtoper");
let vijayMark;

// console.log(typeof check);
// console.log(typeof mark);
// console.log(typeof classMark);
// console.log(typeof chahalMark); its a null, its gives output object ,is it error Of js
// console.log(typeof vijayMark);
// console.log(typeof sachin);
// console.log(typeof(sachin));      this is also a syntax to know datatype
// with this syntax we get type of datatype 


/*referece datatype 
1 .an object
2 .an arrey
3 .a date*/
