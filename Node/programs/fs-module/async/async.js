const fs = require('fs');

fs.writeFileSync('./programs/fs-module/async/res.txt' , 'This be the start\n' , {flag : 'a'} , 'utf8');

fs.readFile('./programs/fs-module/async/1.txt' , 'utf8' , (err , res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    fs.readFile('./programs/fs-module/async/2.txt' , 'utf8' , (err , res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        fs.writeFile('./programs/fs-module/async/res.txt' , `The output: ${first} , ${second}.\n`, {flag : 'a'} , (err , res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(res);
        });
    });
});

fs.writeFileSync('./programs/fs-module/async/res.txt' , 'This be the end\n' , {flag : 'a'} , 'utf8');

