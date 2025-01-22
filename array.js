// array- collection of multiple items in a single variable

let myarray=[1,2,3,4,5];
// console.log(myarray);
//this is the most common way to declare an array 

// there are other ways to declare an array
let mybhagwan= Array("hanuman")
// console.log(typeof mybhagwan);


let myheros=new Array("hanuman","ram","laxman");
console.log(myheros);


// console.log(myarray[1]);//this is the way to access the elements of an array
// console.log(myarray["one"]);//this is a wrong way to access the elements of an array


//array methods--------------------------------------------------------------------------
let mythings=["laptop","phone","charger","earphone"];
// console.log(mythings);
mythings.push("mouse");
// mythings.push("laptop");
// console.log(mythings);//push method add the element at the end of the array
mythings.pop();//pop method removes the last element of the array
// console.log(mythings);


let myfamily=["father","mother","brother","sister"];
// console.log(myfamily);
myfamily.unshift("grandfather");//it adds the element at the beginning of the array
myfamily.shift();//it removes the element from the beginning of the array
// console.log(myfamily);



let myfriends=["rahul","rohit","ramesh","akash"];
// console.log(myfriends);
// console.log(myfriends.includes("shikhar"));//it tell us that the element is present in the array or not in boolean
// console.log(typeof (myfriends.indexOf("rahul")));//it gives the index of the element in the array
// console.log(myfriends);


let myactors=["amir","salman","shahrukh","akshay"];
console.log(myactors);
// console.log(myactors.slice(0,3));//it extracts given elements from the array and create a new array
//but original array remains same 
console.log((myactors.splice(0,3)));//it extracts given elements from the array and create a new array and also 
//remove the extracted elements from the original array
console.log(myactors);



let myactess=["kareena","katrina","deepika","aliya"];
// console.log(myactess);
// console.log(myactess);
// console.log(myactess.join());//it converts the array into a string
// console.log(typeof myactess.join());



//it there are situation that demands to add two arrays or combime two arrays

let myfavplayers=["sachin","virat","dhoni"];
// console.log(myfavplayers);
let friendsfavplayers=["rohit","rahul","shikhar"];
// console.log(friendsfavplayers);
// myfavplayers.push(friendsfavplayers); //it adds the array as an element in the original array make changes 
//in that original array
// console.log(myfavplayers.concat(friendsfavplayers));//it combines two or more arrays and create a new array without
//making changes in the original arrays
// console.log([...myfavplayers,...friendsfavplayers]);//this spread operator also combines two or more
//  arrays and create a new array without making changes in the original arrays .when we want to combine
//new element with the existing array then we use this spread operator
// console.log(myfavplayers);
// console.log(friendsfavplayers);


let randomarray=[1,2,3,4,[5,6,[98,976], 7,8]];
// console.log(randomarray);
// console.log(randomarray.flat(Infinity));//it removes the nested arrays from the array at what depth that we want to remove
//and return a new array , it does not make changes in  original arrays

//static method and instance method
// console.log(Array.isArray(randomarray));





  
  