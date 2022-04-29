const prompt = require('prompt-sync')({sigint : true});

const arrAverage = (arr , n) => {
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        sum += arr[i];
    }
    return sum / n;
}

console.log("Enter the elements of the array.\n");
const size = prompt("What is the length of the array? : ");

let array = [];
for (let i = 0 ; i < size ; i++) {
    array[i] = prompt(`Enter the element of array ${i + 1} : `);
}

console.log(arrAverage(array , size));


