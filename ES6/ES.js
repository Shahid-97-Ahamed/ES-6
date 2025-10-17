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

const colors=['Red',{color:'Pink'},'Green','Blue'];

const [firstColor,secondColor,thirdColor,fourthColor]=colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(fourthColor);

