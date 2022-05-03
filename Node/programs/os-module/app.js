const os = require('os');

//printing the user info
console.log(os.userInfo());
console.log();


//how much time the device has been up and running
const uptime = os.uptime();
console.log(uptime);

//print some information about the OS
const myOS = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
};

console.log(myOS);
