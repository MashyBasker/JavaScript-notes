## **Modules**


Each file in Node is a module. A module is basically a file containing various functions that can be accessed. The functions that can be imported by someone else are written and then `module.exports` command is used to export them.

To import a module, we need to use the `require` keyword.

For example, let's say we have a file called `names.js`

```js
const printNames = (name) => {
    console.log(`Hello there ${name}.`);
};

module.exports = {printNames};
//to access the printNames function with others
```
If the above function was to imported.

```js
const name = require('./names.js');

const name1 = "Jackob";
const name2 = "Pallav";

name.printNames(name1);
name.printNames(name2);
```
Whenever we create and import our own modules, we need to use the `./` infront of the filename inside the `require` method. When we import third-party modules using `npm`, we don't use it.

If we only `console.log` the name variable, the object will be displayed.

*There are other ways to export the functions, some of them have been discussed in the `ES6.md` file in the `Notes` folder.*

**Alternative Exports**

Now, the `module.exports` method is an object, so we add any data to be exported as we add a property to an object.

```js
//export as we go/alternative export
//let the filename be random.js
module.exports.fruits = ['banana' , 'apple' , 'orange'];
module.exports.weapons ={
    first : "rifle",
    second : "ICBM",
    third : "atom bomb"
};
```
In another file, we can call this module.

```js
const stuff = require('./random.js')

console.log(stuff.fruits);
```

If we write a JS program and in it, a function is created and is being invoked. When we `require('./<filename>)` the file, the function gets executed, despite the absence of the `export` command. 

A short example cause I'm annoying:
```js
//let this filename be sum.js
const sum = () => {
    console.log(`The sum is ${5 + 9}.`);
};
sum();
```
The importing file
```js
require('./sum.js');
//this program returns 14
```


## BUILT-IN MODULES 

Node contains a bunch of useful modules. Some of the very useful ones are `OS module` , `FS module` , `HTTP module` and `PATH module`.

### OS Module

The OS module provides methods for OS-related utilities.
It can be imported by using 
```js
const os = require('os');
```
We are not using the `./` like before since `OS` module is a builtin Node Module.

**os.userInfo()**

This method can be used to find the information about the user.
```js
console.log(os.userInfo());
```
This method returns a object that contains information about the `uid` , `gid` , `username` , `shell` and `home directory path`

**os.uptime()**

This method returns how many seconds has the system been running in seconds.

```js
console.log(os.uptime());
```

We can also get a lot of information about our OS using some methods in the OS module.

```js
const myOs = {
    name : os.type(),
    releaseDate : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
};
console.log(myOs);
```

### THE PATH MODULE

The NodeJS path module enables to work with file and directory paths.

**path.sep**

Returns the seperator used for specifying the path of a file or folder. For example, `\` for Windows and `/` for Unix based system such as MacOS or Linux.

**path.join()**

This method returns the file path after joining all the files and folder paths.

**path.basename()**

This method returns the base file name of a path

**path.resolve()**

Returns the absolute path of a file.

```js
const path = require('path');

console.log(path.sep); //returns \ for Windows and / for Unix

const fileName = path.join('/Javascript/' , 'Node' , 'notes.md');
console.log(fileName);//returns /Javascript/Node/notes.md

const base = path.basename(fileName);
console.log(base);//returns notes.md

const absolute = path.resolve(__dirname , 'Javascript' , 'Node' , 'notes.md');
console.log(absolute);
//retuns 







  

  
  


  