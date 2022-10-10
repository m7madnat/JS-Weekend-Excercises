function SumOfLowNum(numbers) {
    let sorted = numbers.sort((a,b) => a - b).slice(0,2);
    return sorted[0] + sorted[1];
}
console.log(SumOfLowNum([19, 5, 42, 2, 77]));
console.log(SumOfLowNum([10, 343445353, 3453445, 3453545353453]));