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

We can even keep the returned value into a variable by assigning the output of the function to it.

```js
function addTwo(val) {
    val += 2
    return val
}
let a = 9
const sum = addTwo(a)
```

*Boolean Datatypes*

Boolean is another datatype that returns `true` or `false` value.

```js
function boolean() {
    return true;
}
```

**Conditional Statements**

We can use conditional `if` anf `else` statements for checking if a condition is true or false and execute some statements accordingly.

```js
let myCondition = true
if (myCondtion) {
    console.log('This statement is true')
}
console.log('This statement is false')
```

*Comparison Operators*

There two ways we can compare two variables `==` anf `===`. With the `==` operator, we can check if two variables are equal according to their value. But `===` checks if their value and data type are also same.

For example, 2 == "2" is `true` but 2 === "2" is `false`.

The `===` is also known as the **strict equality** operator.

Similarly we can use the inequality operator `!=` for checking if two variables aren't equal.
And also we can use the strict inequality operator `!==` for checking if two variables are strictly unequal.

```
For example,
3 != 3 //false
4 != 3 //true
5 !== "5" //true
8 !== 8 //false
```
In addition to the equality operator, we can use the greater than(`>`) and the less than(`<`) operator for checking if a value is greater/less than other or not. There are also the greater than or equal to(`>=`) and the less than or equal to(`<=`) operators for checking if the value is greater than or equal to some value or less than or equal to.

We can also use the logical AND(`&&`) operator for checking multiple conditions within a single statement.

The logical OR(`||`) operator returns `true` if either of the operator is true else returns false.

```js
if (a == 10 || a == 5) {
    return "Yes"
}
return "No"
//returns true of a = 10 or a = 5
```
**ELSE STATEMENT**

`else` statements are used when we want to execute some statements when a condition is false.

```js
if (a == 10) {
    return "Deca";
}
else {
    return "Not Deca";
}
```
When there are mutliple conditions that need to be checked, we use the `else if` statements.

```js
if (x >= 100) {
    k = "Billionaire";
}
else if (x >= 50 && x < 100) {
    k = "Millionaire";
}
else if (x >= 10 && x < 50) {
    k = "Middle Class";
}
else {
    k = "Poor";
}
```

The `Else-If` statements are executed from the top, and hence the statements should be written accordingly.

**SWITCH CASE**

Switch case statement are used for executing statements based on a choice input by the user.

```js
switch(ch) {
    case 1:
        console.log("Hello boi")
        break;
    case 2:
        console.log("Yeaah boi")
        break;
    case 3:
        console.log("WTH boi")
        break;
    default:
        console.log("Invalid choice!")
        break;
}
```

*Returning boolean values*

Functions can return `true` or `false` values according to the condition.

```js
function isCheck(a , b) {
    if (a === b) {
        return true;
    }
    else {
        return false;
    }
}
```

When the `return` statement is reached in a function, the function stops executing.

**JavaScript Objects**

Objects are used for storing data. But instead of indexes, these data are stored along with the properties. 

```js
const dog = {
    "name": "Johnathan",
    "color": "Turquoise",
    "breed": "Labrador"
};
```
*Accessing Object Properties*

We can access the values of the properties of an object using the dot(`.`) and the bracket notation(`[]`).

```js
const newObj = {
    "val1" : "prop1",
    "val2" : "prop2",
    "val3" : "prop3" 
};

const a1 = newObj.val1;
const a3 = newObj.val3;
```

Also we can access the values using the bracket notation like that of an array.

```js
const valObj = {
    "a1" : 1,
    "a2" : 2,
    "a3" : 3
};

const val1 = valObj["a1"]
const val2 = valObj["a2"]
```
We can also store the values of the property names in a variable and access the property values using this variable. This is helpful for when we want to iterate through all the values in an object.

```js
const dog = {
    "Labrador" : "Bro",
    "Pitbull" : "Sis",
    "Bulldog" : "Dad"
};

const dog1 = "Labrador"
const first = dog[dog1]
console.log(firsr)
```

We can change the value of any property of an object by updating it's value like how we update array values.

```js
const myCat = {
    "name" : "Snow",
    "age" : 4,
    "Color" : "white",
    "Gender" : "male"
};

myCat.name = "White"
myCat["age"] = 5
```
We can add new properties to an object by the following format.

`<object_name>.<new_property_name> = <new_property_value>`

We can delete a property from an object by using the `delete` keyword infront of the `object.property` 

```js
const myCow = {
    "name" : "Komi",
    "Color" : "White",
    "Sound" : "Moo"
};

delete myCow.Color
```
Sometimes we might have to check if a property exists or not in an object. For this we use the method `.hasOwnProperty()` and returns `true` if it exists and `false` if not.

```js
const newObj = {
    "first" : "one",
    "second" : "two",
    "fourth" : "four"
};

newObj.hasOwnProperty("fifth") //returns false
newObj.hasOwnProperty("second") //returns true
```
*COMPLEX DATA STRUCTURES*

We can create an array of objects. This type of data is known as JSON(JavaScript Object Notation) and is used as a format for interchanging data.

```js
const val = [
    {
        "name" : "Maharshi",
        "age" : 18 
    },
    {
        "name" : "Jackson",
        "age" : 23
    }
];
```

The values of these objects can be accessed using the dot function.

When there are nested objects, we can access them by chaining together the dot notation.

```js
const obj = {
    "cat" : {
        "properties" : {
            "color" : "white",
            "fur" : "fluffy",
            "whiskers" : "long"
        },
        "biology" : {
            "class" : "mammal",
            "type" : "Felis"
        }
    }
};

const catColor = obj.cat.properties.color;
```

Objects can also contain nested arrays which can be accessed by using the array bracket notation.

```js
const arr = [
    {
        "thing" : "car",
        "names" : [
            "Ferrari",
            "Audi",
            "Porsche" 
        ]
    },
    {
        "thing" : "food",
        "names" : [
            "waffle",
            "chicken wings",
            "soya sauce"
        ]
    }
];

const arrVal = arr[1].names.[2]
```





