function Tribonacci(n) {
    if(n==0)
        return 0;
    if(n==1 || n==2 || n==3)
        return 1;
    return Tribonacci(n-1)+Tribonacci(n-2)+Tribonacci(n-3);
}

console.log(Tribonacci(6));
console.log(Tribonacci(7));
console.log(Tribonacci(8));