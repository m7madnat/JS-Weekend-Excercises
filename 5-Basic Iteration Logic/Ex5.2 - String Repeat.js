function repeat_string(str, n) {
    let res = "";
    for (let i = 0; i < n; i++) {
        res += str;
    }
    return res;
}
console.log(repeat_string("abc", 3));