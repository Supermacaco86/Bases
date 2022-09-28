(()=>{
const addNumbers = (a: number, b: number)=>a+b;
const greet = (name:string)=> `Hola ${name}`;
const saveWorld = ()=> "El mundo está salvado";

let myFunction: ()=> String;

//* myFunction = 10;
//* console.log(myFunction);

// myFunction = addNumbers;
// console.log(myFunction(1,2));

//? myFunction = greet;
//? console.log(myFunction("Martin"));

myFunction = saveWorld;
console.log(myFunction());


})()