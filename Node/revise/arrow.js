const dashesAndEven = (num) => {
    const arr = [];
    while (num > 0) {
        arr.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
            arr.splice(i + 1 , 0 , "-");
            i = 0;
        }
    }
    return arr.join("");
}
console.log(dashesAndEven(423547131233254123));

//write an arrow function to find the sum of the squares of all the numbers in the array in a single line
const arr = [3 , 9 , 5 , -3 , 10];
const sum = arr.reduce((acc , curr) => acc + (curr * curr) , 0);

const sumSquareAvg = sum / arr.length;

console.log(sumSquareAvg);

//Given an array. Use the array.map() to multiply each element by 10
const array = [4 , 7 , 4 , 0 , 2 , 9 , 3];
const newArray = array.map(num => num * 10);
console.log(newArray);

//print a message using arrow function
const printOnly = () => console.log("Printing");


//write three functions as arrow functions
const createFullName = (firstName , lastName) => firstName + " " + lastName;

const doubleNumber = (num) => num * 2;

const getEvenNumbers = (arr) => {
    let newArr = [];
    for (let x of arr) {
        if (x % 2 == 0) {
            newArr.push(x);
        }
    }
    return newArr;
};

//write an arrow function to check if a number is even or not
const checkEven = (num) => num % 2 == 0;

//write an arrow function to give a greeting which spans accross two lines
const greetFullName = (firstName , lastName) => `Hi ${firstName} ${lastName}! \nWelcome to JavaScript!`

//write an arrow function to check how fat someone is
const weightInLbs = (weight) => {
    const poundWeight = weight * 2.2;
    if (poundWeight > 150) {
        return "obese";
    }
    else if (poundWeight > 100 && poundWeight <= 150) {
        return "you are ok";
    }
    else {
        return "underweight";
    }
};

//Find the max element in an array using the forEach() method
const findMax = (arr) => {
    let max = 0;
    arr.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    return max;
};

