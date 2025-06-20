//function is a way to define a execution way that we can use munltiple times

function saymyname(){
    console.log("I am a function");
} 

// saymyname;
// this will not execute the function while it simply reference the function
// saymyname();
// this will execute the function , also its called as function invocation



function addnumber(a,b){
    console.log(a+b);
}
// addnumber(5,5);//but if we want to store the value which function give so
// const sum=addnumber(5,5);
// console.log(sum);// it gives undefined because we are not returning any value from the function

// for that we should defined the function like this and this is the basic way to define the function------
function jobnumber(a,b){
 let sum=a+b;
    return sum;
    //or
    // return a+b;
    //after return statement the function will not execute any code
    
}
console.log(jobnumber(5,5));


//when number of arguments are not fixed
function cartprice(...items){
     return items;
}
console.log(cartprice("aloo" ,"tamatar" , "pyaaz"));
//this ... is here a rest operator which is used to take multiple arguments in a single array



function cartprice1(discount,...items){
    return items;
}
console.log(cartprice1(10,23 ,"tamatar" , "pyaaz"));



//object inside the function
function handleobj(obj){
    return console.log(`my name is ${obj.name} and my age is ${obj.age}`);
}
const myobj={
    name:"sachin",
    age:23
}
handleobj(myobj);

let var1=10;
let var2=`${var1}`;
console.log(var2);
//this is called as template literals and it is used to write the string in a better way , it works as a placeholder
//and only works with backticks

//array inside the function
const myarray=[1,2,3,4,5];
function handlearray(arr){
    return console.log(arr[4]);
}
handlearray(myarray);

