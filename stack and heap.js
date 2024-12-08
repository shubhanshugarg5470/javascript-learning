let mythings= [ 45,"rahul"];
let anotherthings=mythings
anotherthings[0]="ramech"; 
// it will change also mythings array values

console.log(mythings);
console.log(anotherthings);
// it gives same output


// but in case of primitive its not happens
let myage=78;
let myfriendage=myage;
myfriendage=89;
console.log(myage);
console.log(myfriendage);


