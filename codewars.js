// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
function basicOp(operation, value1, value2) {
    if (operation == '+') return value1 + value2;
    if (operation == '-') return value1 - value2;
    if (operation == '*') return value1 * value2;
    if (operation == '/') return value1 / value2;
}

//https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
function greet(name, owner) {
    if (name == owner) return 'Hello boss'
    else return 'Hello guest'
}

//https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
function testEven(n) {
    if (n % 2 == 0) return true;
    else return false
}