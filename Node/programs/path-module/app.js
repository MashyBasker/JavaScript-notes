const path = require('path')

const fileName = path.join('/Node/' , 'programs' , 'path-module' , 'app.js');
console.log(fileName);

const base = path.basename(fileName);
console.log(base);

const absolute = path.resolve(__dirname , 'Node' , 'programs' , 'path-module' , 'app.js');
console.log(absolute);