/* Correct number by fixed that number to two precision digit and then convert it back to number.
   why: because number store as binary form means in 0 and 1 form.
   So, that there may be chances that you may get unexpected result.
   Such as 0.1 + 0.2 = 0.30000000000000004
*/
function correctNumber(number) {
    return Number(Number(number).toFixed(2))
}

function add(a, b) {
    return correctNumber(a + b)
}

function subtract(a, b) {
    return correctNumber(a - b)
}

function divide(a, b) {
    return correctNumber(a / b)
}

function multiply(a, b) {
    return correctNumber(a * b)
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}