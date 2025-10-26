// // step-1(empty parenthasis)

// const test=()=>console.log('Shahid');
// test()

// // step-2(no paranthasis)

// const squear=a=>a*a;
// console.log(squear(10));

// // step-2(paranthasis)

// const sum=(a,b)=>a+b;

// console.log(sum(10,20));

// document.getElementById("test").addEventListener('click',
   
   
//     ()=>{
//     console.log('Hello!!! I am ES6');
// }

// )


// sapared Array

// example-1

// const name=['Shahid','Ahamed','Rabbi'];

// const newArray=["name:",...name];

// console.log(...newArray);

// // example-2
// const number=[10,20,30,40,50];

// console.log(Math.max(number));
// console.log(Math.max(...number));

// // example-3
// const mixedArray=[1,2,3,"four",5];

// console.log(...mixedArray); 
// // output: 1 2 3 four 5

// // example-4
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const combinedArray=[...arr1,...arr2];
// console.log(...combinedArray);

// // output: 1 2 3 4 5 6

// // example-5
// const example5Array=[1,2,3,4,5,6];
// console.log(...example5Array);

// // output : 1 2 3 4 5 6

// // example-6
// function sum(x,y,z){
//     return x+y+z;
// }
// const numbers=[1,2,3];
// console.log(sum(...numbers));

// Distructuring Assignment

// // example-1

// const person={
//     name:'Shahid Ahamed',
//     age:24,
//     profession:'Web Developer'
// };   

// const {name,age,profession}=person;

// console.log(name);
// console.log(age);
// console.log(profession);

// // example-2

// const colors=['Red',{color:'Pink'},'Green','Blue'];

// const [firstColor,secondColor,thirdColor,fourthColor]=colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(fourthColor);

// New Example-3

// const student={
//     name:'Shahid Ahamed',
//     age:24,     
// }


// // Object.seal(student);
// Object.freeze(student);

// student.status='Active';
// student.name='Rabbi Ahamed';


// console.log(student);
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));


// Object with for of and for in loop

// const student={
//     name:'Shahid Ahamed',
//     age:24,
//     profession:'Web Developer'
// };

// // for (let key in student){
// //     console.log(`${key} : ${student[key]}`);
// // }


// for (let [key,value] of Object.entries(student)){
//     console.log(`${key} : ${value}`);
// }


// Solving Problems with ES6

// Example-1: 

// const sum=(a,b)=>a+b;

// console.log(sum(10,20));

// Problem 2 — Spread Operator

// const fruits = ['apple', 'banana'];
// const moreFruits = ['orange', 'mango'];

// console.log([...fruits,...moreFruits]);

//  Problem 3 — Destructuring

// const employee = {
//   id: 101,
//   name: 'Shahid',
//   position: 'Developer'
// };

// const { id, name } = employee;

// console.log(id);
// console.log(name);


// Problem 4 — Object.freeze and Modification

// const car = { brand: 'Toyota', model: 'Corolla' };

// Object.freeze(car);

// car.brand = 'Honda'; // This will not change the brand

// console.log(car); 

// Problem 5 — Looping with Objects

const student = {
  name: 'Ahamed',
  age: 24,
  course: 'Web Engineering'
};

// for of

// for( let [key, value] of Object.entries(student)){
//     console.log(`
//         ${key}, ${value}`)
// }

// for in

// for(let key in student){
//     console.log(`${key} : ${student[key]}`)

// }

// dot Notation vs Bracket Notation

// dot notation

// const person={
//     name:'Shahid Ahamed',
//     age:24,
//     profession:'Web Developer',
//     status:{
//         married:'Single',
//         citizen:'Bangladeshi',
//         fatherName:'Nur Nabi'
//     }
// };

// // console.log(person.status?.village);

// // bracket notation

// console.log(person['profession']);

// Array-Map

// const numbers=[158,254,3454,485,5774];

// // const newArray=numbers.map(digit=>digit+1);  // Array-Map
// const newArray=numbers.map(digit=>{
//     return digit+1;
// });  // Array-Map

// const filteredArray=numbers.filter(digit=>digit>500); // Array-Filter

// console.log(filteredArray);
// console.log(newArray);

// const friends=['Shahid','Ahamed','Rabbi','Khan','Rafiq'];

// const newFriends =friends.map((friendsName,index)=>{
//   // return friendsName;
//   console.log(index, friendsName);
// });

// // console.log(newFriends);  

// const products=[
//     {name:'Laptop',price:45000,brand:'Lenovo',color:'Silver'},
//     {name:'Phone',price:15000,brand:'Realme',color:'Black'},
//     {name:'Tablet',price:25000,brand:'Samsung',color:'White'},
//     {name:'Monitor',price:30000,brand:'LG',color:'Black'},
//     {name:'Keyboard',price:2000,brand:'Logitech',color:'Gray'},
// ];    

// const expensive=products.filter(product=>product.price>20000);

// console.log(expensive);

// products.forEach(product => {
//       console.log(product);
// });

// const product =products.find(product=>product.name==='Tablet');

// console.log(product);


// class Person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }

//   salam(){
//     console.log("Assalamu Alaikum");   // this method use for super class
//   }
// }

// class Hena extends Person{
//   constructor(name,age){
//     super(name,age);
//   }
// } 

// const ha =new Hena('Ahamed',26);

// // console.log(ha);

// ha.salam();

  // const hena = new Person('Shahid Ahamed',24);

  // console.log(hena);


  //prmetive data type and non prmetive data type

  // 1. Prmetive data type

  // const name ='Shahid';

  // const anotherName=name;

  
  // console.log(anotherName);

  // anotherName='Ahamed';

  //non prmetive data type
   
  // const person={
  //   name:'Shahid',
  //  };

  //   const anotherPerson=person;
  //   anotherPerson.name='Ahamed';
  //   console.log(anotherPerson);

  // Null and undefined

// const name ="Shahid";

// console.log(typeof name)

//1. Parameter nah deya call korle undefined dekhabe

// function sum(num1,num2){
//   console.log(num1,num2);
// }

// sum()

//2. Jodi perameter na pathai tahole  undefined dekhabe

// function sum(num1,num2){
//   console.log(num1,num2);
// }

// sum(10)

//3. funtion theka return na korle undefined dekhabe
// function sum(num1,num2){
//   console.log(num1,num2);
// }

// const result=sum(10,20);
// console.log(result);

// //4. Jodi return er por kichu na deya hoy tahole undefined dekhabe
// function sum(num1,num2){
//      return
// }

// const result=sum(10,20);
// console.log(result);


//equlity operator

// // example-1:  == vs ===

//double equal

// const num1=10;
// const num2='10';

// if(num1==num2){
//   console.log('value is equal');
// }
// else{
//   console.log('value is not equal');
// }

//triple equal
// const num1=10;
// const num2='10';

// if(num1===num2){
//   console.log('value is equal');
// }
// else{
//   console.log('value is not equal');
// }

// const num1=0;
// const num2=true;

// if(num1==num2){
//   console.log('value is equal');
// } else {
//   console.log('value is not equal');
// }

// const num1=[];
// const num2=num1;

// if(num1==num2){
//   console.log('value is equal');
// } else {
//   console.log('value is not equal');
// }

// const num1=[];
// const num2=[];

// if(5*"2"===10){
//   console.log('value is equal');
// }else {
//   console.log('value is not equal');
// }


//type conversion

//they have two types
//1. Implicit type conversion
//2. Explicit type conversion

//Explicit type conversion


// let num1='100';

// let num2=Number(num1); //string to number

// console.log(num2);


// let num3=100;

// let num4=String(num3); //number to string

// console.log(num4);

// Block scope global scope simple understanding of Hoisting

// function sum(num1,num2){
// //        const total=num1+num2;
// //        console.log(total);
// // }

// // // console.log(total);  //error because function er bahire total ke call kora jabe na korla daka jabe na

// // sum(10,20);

//function hoisting

// sayHello(); // again hoisting er aga kaj korbe

// function sayHello() {
//   console.log("Hello!");
// }

// sayHello(); // again hoisting er pora kaj korbe

