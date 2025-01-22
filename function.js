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