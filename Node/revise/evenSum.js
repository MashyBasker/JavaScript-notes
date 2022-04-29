//write an arrow function that takes an array as an argument and finds the sum of all the even numbers
//you need to use the for..of statement

const sumEvens = (arr) => {
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const array = [2 , 8 , 4 , 5 , 0 , 3 , 1 , 9 , 3];
console.log(sumEvens(array));