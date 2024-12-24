//just like string litral number litral declareation ways are same 

let myage=56;
// console.log(myage);
console.log(myage.__proto__);


// there a less methods for number object as compare to string object
//these are some important methods and properties that we often use



let myfriendage=67;
// console.log(myfriendage.toString());//we use this method to convert number to string so we can 
//use string methods on it


let mybalance=2345.0020;
// console.log(mybalance);

let anotherbalance=(mybalance.toFixed(2));//this method tell us how many decimal points we want
// let anotherbalance=Number(mybalance.toFixed(2));//
// console.log(typeof anotherbalance);//this return string if we want that it remain
//number so we can use Number to convert it in number



let result=43.45;
console.log(result.toPrecision(1));//this method return the number with the length we want
















