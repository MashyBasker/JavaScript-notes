### Scopes of `var` and `let`

When the `var` keyword is used, the variables are declared globally(when declared outside a function) and locally when declared inside a function. 

But when the `let` keyword is used, if the variable is declared inside a code block, its scope is only inside that codeblock.

```js
const newArray = []
for (var i = 0 ; i < 10 ; i++) {
    newArray.push(i);
}
console.log(newArray); //outputs 0, 1, 2....9
console.log(i);//outputs 9
```
 The above code block is the same as writing 
 ```js
 const newArray = []
 var i = 0;

 for (i = 0 ; i < 10 ; i++) {
     newArray.push(i);
 }
 console.log(newArray);
 console.log(i);
 ```

 However if we were to use the `let` keyword instead of the `var` keyword; the second `console.log()` statement wouldn't execute as it is outside the code block and hence out of scope.

 ### The `const` keyword

An array or object declared using the `const` keyword is mutable. Only varibale identifiers which are declared using the `const` keyword are immutable. It is a good practice to declare a variable with `const` keyword unless we are *sure* we will be changing the value in the future.

```js
const arr = [1 , 4 , 9]
arr = [2 , 4 , 6 , 8]; //leads to error
arr[0] = 0; //mutates the array
```

So if we want to prevent any changes to the objects, we can use the `Object.freeze()` method to prevent any changes to an object.

```js
const math = {
    PI : "3.14",
    LIGHT : "300000000"
};

Object.freeze(math);
math.PI = 7; //shows error
```

### Arrow functions

Sometimes we may want to pass a function into a variable. We achieve this by writing inline functions like this.
```js
const arr = function() {
    const a = 9 , b = 7;
    return a + b;
}
```
We can simplify this code using the arrow function

```js
const myVal = () => {
    const a = 9 , k = 7;
    return a + k;
}
```
If the function contains only a return statement, the we don't need to use the curly brackets.

```js
const name = () => "hello world";
```

We can also pass values inside the arrow function

```js
const val = (num) => num * 10;
```
If the arrow function contains only a single parameter, we may even omit the brackets.

**Deafult Parameters**

Default parameters are a way to make functions more flexible. Default parameters are passed into the function and if the parameters are not specified during function call, then the default parameters kick in.

```js
const name = (val = "Nobody") => "Hi" + val;

console.log(name("Jasick")); //returns "Hi Jasick"
console.log(name()); //returns "Hi Nobody"
```

**Rest Parameter**

The Rest Parameter allows us to pass as many arguments as we want inside the function.

```js
const sum = (...arg) => "There are " + arg.length + "arguments.";
```

When using the `rest parameter`, the arguments are stored as an **array** and we can access each argument using the bracket operator.

```js
//code snippet to find the sum of all arguments
const sum = (...arg) => {
    let tot = 0;
    for (let i = 0 ; i < arg.length ; i++) {
        tot += arg[i];
    }
    return tot;
};
```
 **Spread Operator**

 The Spread Operator is used on some iterable data structure such as an array, string or an object. It used when we need only the values of that data structure. For example

 ```js
 const arr = [1 , 2 , 3 , 4];
 sum(...arr); //1 + 2 + 3 + 4
 ```
 Each element of the array is *expanded/spread* and the values are used as argument for some function. 
 But this operator can only be used along with another method.

For example, this is not possible:
 ```js
 const arr = [1 , 0 , 8 , 6];
 const val = ...arr;
 ```
 
 **Destructuring Assignment**

 It is a simpler and cleaner way of declaring object variables.
 In ES5 code, an object is created in the following manner:

 ```js
 const obj = {name : "Jack" , age : 19};
 const objName = obj.name;
 const objAge = obj.age;
 ```
 In the ES6 standard, using the destructuring assignment, we can declare objects in the following manner:

 ```js
 const {name , age} =  obj;
 ```
 We can take the values as user input. This can be extended to arrays in the following manner.

 ```js
 const array = [1 , 9 , 4 , 7 , 10];
 const [x , y] = array;
 
 console.log(x); //returns 1
 console.log(y); //returns 9
 ```

 This is much better than storing array elements in a avariable without using array index.

 We can rename the variable names to new names by using the colon operator.

 ```js
 const obj = {
     val1 : 45,
     val2 : 69,
     val3 : 23
 };

 const {val1 : hulu , val3 : chulu} = obj;
 ```
We can use destructuring assignment to assign the values of nested object much easily.

```js
const myObj = {
    Jack : {
        email: jack@gmail.com;
        salary: 56000;
    }
};

const {Jack : {email , salary}} = myObj;
```
To rename the variables, we can use the similar `:` operator.

```js
const myObj = {
    Jack : {
        pet: "Kali",
        food: "Chips"
    }
};

const {Jack: {pet: petName , food: foodType}} = myObj;
```

Destructuring array is very easy. One key difference between the `spread` operator and destructure, is that in the `spread` operator you cannot choose which elements you want, but in `destructuring` we can choose which elements. If we want values which are not consecutive, we can reach them by using commas.

```js
const array = [2 , 9 , 4 , 6 , -3 , 0];
const [a , b] = array;
console.log(a + " " + b); //prints: 2 9
const [x , y , , , , z] = array;
console.log(x); //2
console.log(y); //9
console.log(z;) //0
```
**Slicing the Array**

We can use the destructuring and the rest parameter to get a subarray.

```js
const array = [1 , 8 , 3 , -12 , 3 , 5];
const [a , b , ...sub] = array;

console.log(a); //1
console.log(b); //8
console.log(sub); //[3 , -12 , 3 , 5]
```

***Template Literals***

ES6 introduces template to make creating complex strings very easily. It is like the `format string` operator in Python.

```js
const data = {
    name: "Maharshi",
    colour: "black"
}
const sentence = `Hello I am ${data.name} and my hair colour is ${data.colour}.`
//Hello I am Maharshi and my hair colour is black
```
We can use a shorthand to write arrow functions for when we want to return an object.

```js
const valReturn = (a , b) => ({a , b});
```
In ES5 if we wanted to declare a function inside an object, we had to use the keyword `function`.

```js
const myobj = {
    val: "chalk",
    sent: function() {
        return `Eat this ${myobj.val}.`; 
    }
};
```

In ES6, we can get rid of this `function` keyword.

```js
const myobj = {
    val: "chalk",
    sent() {
        return `Eat this ${myobj.val}.`;
    }
};
```
**Constructor Function**

A constructor function is a way of creating class functions for objects in javascript.

```js
//OLD
var car = function(name) {
    this.name = name;
}

var newCar = new car('Mercedez');
```

```js
//ES6
class Car {
    constructor(name) {
        this.name = name; 
    }
}
const newCar = new Car("Mercedez");
```

If we need to inherit some properties, we use the `extends` keyword and the `super` keyword to inherit the properties of the parent class.

**Getters and Setters in Javascript**

The `get` and `set` commands are used for updating the value of a constructor object from outside the object. We use these keywords infront of the function name which updates the value.

```js
class Car {
    constructor(name) {
        this.name = name;
    }
    get change() {
        return this.name;
    }
    set change(newName) {
        this.name = newName;
    }
}

const newCar = new Car("Toyota");
console.log(newCar.change);
newCar.change = "Mercedez"
console.log(newCar.change);
```

**Javascript Modules and Scripts**

ES6 introduced a new feature wherein we can share parts of codes with the `import` keyword. This can be done by using the `module` attribute inside the `script` tag.

*Import*

A code can then use this module by using the `import` anf `export` commands.

Let's say we have a file called `math.js`containing many functions that perform mathematical operations. If we want import this file, we can use the mathematical functions inside it.

The functions can only be used when we use the `export` keyword infront of the function name.

```js
export const add = (a , b) => a + b;
```
We can do this or even add the functions like this,
`export{<file_name>}`

```js
//file name is maths.js
const multiply = (x , y) => x * y;
const add = (x , y) => x + y;
const divide = (x / y) => x / y;
const subtract = (x , y) => abs(x - y);

export{add , subtract , multiply , divide};
```

*Importing*

We can reuse pieces of code by using the `import` keyword. We can import a specific function from a file using the function name along with the `import` keyword or even import all of them using the `*` command.

Let's use the same example with `math.js`
```js
import {multiply} from  './math.js';
```
Here the `import` command will find the `multiply` method from the file `math.js` and import just the `multiply` function. 

For importing more than functions.
```js
import {multiply , subtract} from './math.js';
```

And like I said before, we can import all the functions using the `import * as` command.

Using the same example of math functions.

```js
import * as math from './math.js'

const sum = math.add(2 , 9);
const product = math.multiply(4 , 0);

console.log(`Sum is ${sum} and product is ${product});
```

*Export Default*

It is used for when we want to import only a single function from a module. For importing this, we need not use the curly braces.

```js
//creating the math.js module
export default add(a , b) {
    return a + b;
}

export default division(a , b) {
    return a / b;
}
```

Importing only the add function from the `math.js` module.

```js
import add from './math.js'
const sum = math.add(4 , 8);
```

*Javascript Promise*

A JavaScript promise is used for doing something, usually asynchronously. A promise is a constructor function which takes two paramteres `resolve` and `reject`. 

If the promise becomes successful, then the `resolve` parameter is resolved otherwise the `reject` parameter is returned. The Promise constructor takes a function as its parameter.

```js
const serverRequest = new Promise((resolve , reject) => {

});
```
Also,

```js
const makeServerRequest = new Promise((resolve , reject) => {
    let serverResponse;
    if (serverResponse) {
        resolve("The request was successful");
    }
    else {
        reject("The request was reject");
    }
});
```

*Handling a promise*

When the promise is fulfilled with the resolve, we can use the `then` keyword to perform some function given by the paramter passed to the callback function.

```js
const makeRequest = new Promise((resolve , reject) => {
    let response = true;
    if (response) {
        resolve('The request was successful');
    }
    else {
        reject('The requesr was rejected');
    }
});

makeRequest.then(result => {

});
```

If the request was rejected, then the `catch` method is used to send an error.

```js
const makeRequest = new ((resolve , reject) => {
    let serverResponse = true;
    if (serverResponse) {
        resolve("The request was fulfilled.");
    }
    else {
        reject("The request cannot be fulfilled");
    }
});

makeRequest.then(result => {
    console.log(result);
});

makeRequesr.catch(error => {
    console.log(error);
});
```

*Array Reduce*

It is a method which reduces the elements of an array into a single value.

This method takes two parameters, a function and a starting value. The function takes an **accumulator** and a **CurrentOrder**.

The **accumulator** returns the value which was the reduced to for that iteration and the **CurrentOrder** takes the value of the array for that specific iteration.

```js
//to find the sum of the array elements
const array = [1 , 8 , 4 , 0];

const sum = array.reduce((acc , curr) => {
    acc + curr;
} , 0);
```
*forEach() method in JavaScript*

It is the same as iterating through all the elements of an array, except it is performed as a callback function.

A callback function is one which is passed as parameter into another function.

The first parameter of the method corresponds to the elements themselves and the second parameter is the index of those elements.

```js
const arr = [2 , 7 , 8 , 1 , 0];

const arr.forEach((element) => {
    console.log(element);
});
```













