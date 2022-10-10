function Mask(str) {
    if(str.length >= 4)
        return '#'.repeat(str.length-4) + str.slice(str.length-4,str.length);
    else
        return str;
}
console.log(Mask("4556364607935616"));
console.log(Mask("64607935616"));
console.log(Mask("1"));
console.log(Mask(""));

console.log(Mask("Skippy"));
console.log(Mask("Nananananananananananananananana Batman!"));