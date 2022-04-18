### Javascript Fundamentals
---
Data is stored in a variable using the `var` keyword. There are 8 different data types in JavaScript: `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number` and `object`. 

We can declare a variable using the `var` keyword. We can store some value to the variable using the `=` operator.

```js
var myName = 'John';
```
We can set a variable to another variable.

```js
var myName = 'Gulshan';
var yourName;
yourName = myName;
```
When JavaScript variables are defined, they have an initial value of undefined. When we peform a mathematical operation on an undefined variable, we get Not A Number (NaN). When we try to concatenate a string with `undefined` we get an `undefined` string. 

The *let* keyword:

One of the problems with the `var` keyword was that it could be easilt overwritten by declaring the same variable. Hence, the `let` keyword was invented to prevent this.

Moreover, using the `const` keyword we can create a variable which is immutable. 

The `Number` datatype is used to declare numeric data.

```js
let sum = 6 + 63;
```
Similarly, we subtract using `-`, multiply using `*` uand divide using `\`

Incrementing by `1` can be easily done to a variable using the following operator `i++`.
Similarly, we can decrement using `i--` operator.

We can also represent decimal numbers in a variable using floating points.

We can also perform mathematical operations a floating point value.

The remainder (`%`) operator gives the remainder after diving a number by another.

```js
let res = 3 % 5; // gives the value 6
```

In JavaScript, strings are assigned and printed with the `" "` symbol around them. But if we need to print these same character then we need to use backslash(`\`) infront of them.

```js
console.log("Gilber said, \"You suck bro!\"");
```

In JavaScript, we can concatenate two strings using the `+` operator.

```js
let hello = "Hello World, " + "I will kill you all.";
//outputs to: Hello world, I will kill you all.
```

We can find the length of a string using `.length` after the string.

```js
let val = "Hello World".length;
```

We can find a specific character of a string using thr `[]` operator. The counting starts from `0`

```js
let name = "Jon Snow";
let letter = name[5];
console.log(letter);
//the output will be: n
```

String characters are immutable. To change a specific character, we need to reassign the entire string.

**Arrays in JavaScript**

Arrays in javascript are used to store more than one data in a single variable. An array can contain data of various data types.

```js
const myArr = ["Orange" , 3 , true];
```
These data are contained inside the square brackets.

We can also nest an array inside another array. These are called multidimensional array.

```js
const arr = [["Okabe" , "Rawat"] , ["Sagamantus" , "Pappibhai"]];
```
The two inside arrays are seperated by a comma.

The inside the array can be accessed using indexes. Index start from `0`.

```js
const arr = ["Orange" , "Morphine" , "Lava"];
console.log(arr[1]);
//prints: Morphine
```

The values of an array are mutable, unlike strings. **They can be changed even if they have the `const` keyword.**

A multidimensional array can be thought of an array of an array. Each bracket represent each dimension. The first bracket represents the first or outermost array and the brackets inside it represents more dimensions and can be accessed using brackets along with the array name.

```js
const array = [
    [1 , 2 , 3],
    ['A' , 'b' , 'D'],
    [["basu" , "jangid" , "lax"] , ["Hello" , "yo"]]
];
console.log(array[2][0][1]);
//prints: jangid
```

If we need to append data to the end of an array, we can use the `.push()` function. This function takes one or more data and pushes them at the end of the array.

```js
const arr1 = [3 , 9 , 19293247626];
arr1.push(12);
console.log(arr1);
//prints:[ 3 , 9 , 19293247626 , 12 ]
```

We can push an entire array at the end
```js
const arr = [["chocolate" , "meat"] , ["orange" ,  "heroin"]];
arr.push(["vicodin" , "baby"]);
console.log(arr.join(' '));
//prints: chocolate,meat orange,heroin vicodin,baby
```
Another function to manipulate an array is the `.pop()` function which is used to remove an element from the end of an array. We can store this popped value by assigning it to a variable.

```js
const arr = [1 , 3 , 8 , 845];
let end = arr.pop();

console.log(arr); //prints: [ 1 , 3 , 8 ]
console.log(end); //prints: 845
```
Now if we need to remove an element from the start of the array, we use the `.shift()` function. This works similarly like the `.pop()` function except that it removes elements from the front.

```js
let array = [2 , 9 , 182.78];
let front = array.shift();
console.log(array); //prints: [ 9 , 182.78]
console.log(front); //prints: 2
```
Just like `.push()` we can also add elements to the start of an array using the `.unshift()` function.

```js
const array = ["jakob" , "joseph" , "o'neil"];
array.shift();
array.unshift("billy");
console.log(array);
//prints: ["billy" , "joseph" , "o'neil"]
```

**FUNCTIONS**

Functions are used for making reusable portions of code. We can write a function for performing addition and invoke it in any other part of the code. Functions are created by using the keyword `function`.

```js
function hey() {
    let a = 3 , b = 9;
    console.log(a + b);
}
hey(); //output: 12
```
This function is called/invoked by writing the function name and writing opening and closing parenthesis after it.
Eg. `hey()`

Function Parameters are used for passing arguments that are to be used in the function. 

```js
function add (v1 , v2) {
    console.log(v1 + v2);
}
add(3 , 7);
```
Sometimes we may not want to print something with the function and rather return a value. For that we use the `return` keyword.

```js
function multiply(a1 , a2) {
    return a1 * a2;
}
const val = multiply(2 , 7);
```

__Scope of variables__

When we define a variable inside a function, that variable cannot be accessed outside that function. These type of variables are called local variables. If we want these variables to be accessible everywhere, those variables should be declared outside of any function. These outside variables are called global variables. 

```js
fk = 90; // global variable
function sum(var) {
    let k = 45 //local variable
    return var * k
}
```
Local and Global variables can have the same name.
Since a local variable cannot be called at the global space.

If a function does not have a return value, then the return type of the function is undefined. 


