function rangeOfNumbers(startNum , endNum) {
    if (startNum > endNum) {
        return [];
    }
    else {
        const array = rangeOfNumbers(startNum + 1 , endNum);
        array.unshift(startNum);
        return array;
    }
}

console.log(rangeOfNumbers(5 , 12));