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

const name1 = "Jakob";
const name2 = "Pallav";

name.printNames(name1);
name.printNames(name2);
```
Whenever we create and import our own modules, we need to use the `./` infront of the filename inside the `require` method. When we import third-party modules using `npm`, we don't use it.

If we only `console.log` the name variable, the object will be displayed.

*There are other ways to export the functions, some of them have been discussed in the `ES6.md` file in the `Notes` folder.*




