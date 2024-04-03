/*and then we assign a value (wich is a datatype) 
we classify  datatype in two type (we classify datatype based on how data stored in memory and how we access this data)
 1.primitive data type       2.refference datatype
 
primitive datatype---
nn bb ss u (shortcut for learn)
1.mull ==> is a standalone value 
2.number 
3. boolian 
4.bigimt
5. strimg ==> when we write somethimg in dounle quote like this  "gargji" is called string ,in doble quote we can write not only text 
also we can write number 
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
// console.log(classMark);
// console.log(typeof classMark);
// console.log(typeof chahalMark); its not showing type null its show object 
// console.log(typeof vijayMark);
// console.log(typeof sachin);
// console.log(typeof(sachin));      this is also a syntax to know datatype
// with this syntax we get type of datatype 


/*referece datatype 
1 .an object
2 .an arrey
3 .a date*/
// 4 . function 


// object=======>

const rohit= {
   playtype : "right",
   age :35,
   runs : 10000,
   
}
// console.log(rohit);
// console.log(typeof rohit);
// it give output object 

// array======>
const myheros=["saktiman","hatim","hobo"]
// console.log(myheros);
// console.log(typeof myheros);
// it gives us object 

// function======>
const myfac=function(a ,b){
       return(a+b) 
}
let g=myfac(45 ,89);
let k=myfac(1234 ,857598);

// console.log(g);
// console.log(k);
// console.log(typeof myfac);
// it gives us function 