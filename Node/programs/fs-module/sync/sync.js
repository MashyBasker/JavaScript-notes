const fs = require('fs');

const first = fs.readFileSync('./programs/fs-module/sync/one.txt' , 'utf8');
const second = fs.readFileSync('./programs/fs-module/sync/two.txt' , 'utf8');

fs.writeFileSync(
    './programs/fs-module/sync/res.txt' , 
    `The output is:\n\n${first}${second}` , 
    'utf8'
);