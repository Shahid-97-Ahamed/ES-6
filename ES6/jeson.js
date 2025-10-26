// JavaScript Object Notation (JSON)

const person ={
    name:"Shahid Ahamed",
    age:24,
    profession:"Web Developer"
}

//Object to JSON
const newPerson = JSON.stringify(person);
console.log(newPerson);
// console.log(typeof newPerson);
// console.log(typeof person);

//JSON to Object

const jsonPerson = '{"name":"Shahid Ahamed","age":24,"profession":"Web Developer"}';
const objPerson = JSON.parse(jsonPerson);
console.log(objPerson);
// console.log(typeof jsonPerson);
// console.log(typeof objPerson);   