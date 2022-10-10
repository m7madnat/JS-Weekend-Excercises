function findUniqe(array) {
    let sortedArr = array.sort((a,b) => a - b);
    if(sortedArr[0]==sortedArr[1])
        return sortedArr.pop();
    else
        return sortedArr.shift();
}

console.log(findUniqe([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniqe([ 0, 0, 0.55, 0, 0 ]));
