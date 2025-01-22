let mysecret=Symbol("raj");
const portpholio={
    name: 'Jae',
    age: 25,
    job: 'developer',
    location: 'Seoul',
    "his@friend": 'leo',
    [mysecret] :"I am a secret",//this is a way to declare a key as a symbol
    mysecret : "I am a secret",//if we do this so it not add symbol to the key rather it add string
    
}
//this is a object litral syntax to declare a object
//inside it there are key which by default are string but we can also exiplicitly make it string
//  and there are values which can be any datatype which we want to store
// console.log( portpholio);
// console.log(typeof portpholio);



// there are ways to access any thing from the object
// console.log(portpholio.name);//this is the most common way 
// console.log(portpholio."his@friend");//this way fails when we make key as string exiplicitly

// console.log(portpholio["his@friend"]);//this way access any thing from the object
// console.log(portpholio["age"]);
// console.log(portpholio[mysecret]);//only this way we can access the key which is declared as a symbol 

portpholio["myhero"]="hatim";//or
portpholio.myhero="hatim";
// console.log(portpholio);
// Object.freeze(portpholio);//this will make the object immutable


portpholio.about=function(){
    console.log("I am a developer");
    console.log(`My name is ${this.job} and I am ${this.age} years old`);
}
// portpholio.about();



// when we create object like this so it is singleton object 
const myobj=new Object();
//so this is a singleton object




// object nesting
const biodata={
    email:"some@gmail.com",
    bigname:{
        fullname:{
            name:"jae",
            lastname:"raj"
        }
    }
}
// console.log(biodata.bigname.fullname.name);
// console.log(biodata.bigname?.fullname.name);//optional chaining , using ? if any 
//property is not present so it will not throw error rather it will return undefined , it uses when
//something comes from api and we are not sure that it will be present or not



//object merging
const biodata1={
    email:"@gmail.com",
    name:"jae",
}
const biodata2={
    gmail:"@gmail.com",
}


const biodata3={ biodata1 , biodata2 };
console.log(biodata3);   //but this will not merge the object rather it will create a object inside a object

const biodata4={ ...biodata1 , ...biodata2 };
console.log(biodata4);  //this will merge the object and avoid object nesting

const biodata5= Object.assign({},biodata1,biodata2);
console.log(biodata5);  //this will also merge the object and avoid object nesting



//when data comes from database so it comes in the form of array of object so we can access 
//anything like this
const database=[{name:"jae",age:25},{name:"raj",age:25},{},{},{}];
// console.log(database[0].name);
// console.log(database[1].name);


console.log(Object.keys(portpholio));//this will return the keys of the object in the form of array
console.log(Object.values(portpholio));//this will return the value of the object in the form of array
console.log(Object.entries(portpholio));//this will return the key value pair of the object in the
//  form of array



// when handle learge size of object so we can use for in loop through the object to find something
console.log(portpholio.hasOwnProperty("name"));//this will return true if the key is present in the object
console.log(portpholio.hasOwnProperty("fullname"));//this will return true if the key is present in the object