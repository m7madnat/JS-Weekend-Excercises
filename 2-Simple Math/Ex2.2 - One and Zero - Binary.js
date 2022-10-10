function OneAndZero(arr) {
    let dec = arr.join('');
    return parseInt(dec,2);
}
console.log(OneAndZero([0, 0, 0, 1]));
console.log(OneAndZero([1, 0, 1, 1]));
console.log(OneAndZero([0, 1, 0, 1]));

