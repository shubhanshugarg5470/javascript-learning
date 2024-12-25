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



let result=43.85;
// console.log(result.toPrecision(2));//this method return the number with the length we want
// and also round off the number if it is not in the length we want


let mymark=567;
let newmymark=(mymark.toExponential(2));
console.log(newmymark);//it tell how many digits afrer the decimal point we want


let hismark=123456543;
console.log(hismark.toLocaleString("en-IN"));// this method make the number more readable by adding commas
//by giving the country code in the argument



//there are some properties of number object
// console.log(Number.MAX_VALUE);//this return the maximum value that a number can hold
// console.log(Number.MIN_VALUE);//this return the minimum value that a number can hold
// console.log(Number.POSITIVE_INFINITY);//this return the positive infinity value
// console.log(Number.NEGATIVE_INFINITY);//this return the negative infinity value
// console.log(Number.NaN);//this return the NaN value


















