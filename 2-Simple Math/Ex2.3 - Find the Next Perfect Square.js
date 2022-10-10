function FindPerfectSquare(num) {
    if(Math.sqrt(num) % 1 == 0)
        return Math.pow(Math.sqrt(num)+1,2);
    else
        return -1;
}
console.log(FindPerfectSquare(121));
console.log(FindPerfectSquare(625));
console.log(FindPerfectSquare(114));
