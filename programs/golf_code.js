const read = require('readline-sync')

let hole = Number(read.question('How many hits did it take?: '))
let par = Number(read.question('How many pars?: '))

if (hole == 1) {
    console.log('Hole-In-One');
}
else if (hole <= par - 2) {
    console.log('Eagle');
}
else if (hole == par - 1) {
    console.log('Birdie');
}
else if (hole == par) {
    console.log('Par');
}
else if (hole == par + 1) {
    console.log('Bogey');
}
else if (hole == par + 2) {
    console.log('Double Bogey');
}