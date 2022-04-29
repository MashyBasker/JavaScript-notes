//write an arrow function to take the name of a user and print a greeting

//const read = require('readline-sync');
const prompt = require('prompt-sync')({sigint : true});
const greet = (name) => "Hello " + name;

const val = prompt('Enter the name : ');
console.log(greet(val));

