function calc(action,a,b){
    switch (action){
        case '+':
        return a + b;
        break;
        case '-':
        return a - b;
        break;
        case '*':
        return a * b;
        break;
        case '/':
        return a / b;
        break;
        default:
        return 'Unsupported operator has been used';
        break;
    }
}

module.exports = calc;

console.log(calc('%',4,1));