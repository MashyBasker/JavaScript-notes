let count = 0;
const read = require('readline-sync')

function cardCount(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count = count + 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
}

cardCount(7);
cardCount(8);
cardCount(9);
//cardCount(5);
//cardCount(6);

if (count > 0) {
    console.log(count + ' Bet')
}
else {
    console.log(count + ' Hold')
}