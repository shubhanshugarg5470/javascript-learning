// this is string litral
const nam="rohit";
const hisfriendname="sikhir";



// when there is need to add multiple string
const tell = nam+ " "+ hisfriendname;

const tellme=`my friend name is ${nam} and his friend name  is ${hisfriendname}`
// console.log(tellme);
// this is called string template litral, this is called string interpolation
// when adding several string we should use this syntax intead of this 
// this is a efficiant syntacting way to declare a string with some other functionality

// also when create string with multiple lines span
let multipleLines=`this is me
my name is shubhanshu garg`;

// let jyadalines="this is me/nmy friend name is rahul"; not effecient
// console.log(multipleLines);
// console.log(jyadalines);

//this improve readability of code which is very important in code


let myage=87;
let myfriendage=65;

let combine=`i wanna tell you that my age is ${myage} and my friend age is ${myfriendage}`;
// console.log(combine);









// there other ways to declare a string
let myhero=String("hatim");
// this syntax we use when we exiplicitly want to store string , we use this when we convert 
//any other datatype in string , when we not sure that which datatype we wanna store in not string but
//we want to store as string
let mythings=String("56ghj");
// console.log(mythings);
// console.log(typeof mythings);





//another way to declare a string
let username=new String("rahul")
// console.log(username);
// console.log(typeof username);
//this way not crate string primitive, while its a string object (constructer)
//this is mutable and its not a promanent way to declare a string this way use in same
// perticuler situations as when we wanna add custom properties and methods for this string object



// some important properties and methods which we often use---------------------
// we can use all properties and methods that string object have because of prototype inharitance
//regardless of how we declare a variable. also when we try to access properties for string litral
//so under the hood the process going on same as string object js engine temprarly create string object.

let mydost="rohit";
let fakemydost=mydost.toUpperCase();
// console.log(mydost);
// console.log(fakemydost);




let mynewdost=new String("ramesh");
let fakemynewdost=mynewdost.toUpperCase();

// console.log(fakemynewdost);
// console.log(mynewdost);



let rahulfriend="akash";
// console.log(rahulfriend.charCodeAt());



let hatim="hobo";
console.log(hatim.indexOf("o"));
// how to find same character with this method
console.log(hatim.charAt(3));

















