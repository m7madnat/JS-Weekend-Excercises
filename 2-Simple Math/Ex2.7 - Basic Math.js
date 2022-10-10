function BasicMath(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1+value2;
            break;
            
        case '-':
            return value1-value2;
            break;

        case '*':
            return value1*value2;
            break;

        case '/':
            return value1/value2;
            break;
        default:
            console.log('Error in operation');
            return NaN;
            break;
    }
}
console.log(BasicMath('+', 4, 7));
console.log(BasicMath('-', 15, 18));
console.log(BasicMath('*', 5, 5));
console.log(BasicMath('/', 49, 7));


