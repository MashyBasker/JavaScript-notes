function nextInLine(arr , val) {
    let res = arr.shift()
    arr.push(val)
    return res
}

array = [2 , 9 , 7 , 8 , -1 , 3]
nextInLine(array , 6)
console.log(JSON.stringify(array))
