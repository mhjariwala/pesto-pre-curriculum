const {
    describe,
    it,
    expect
} = require('./test-utils')

const {
    add,
    multiply,
    divide,
    subtract
} = require('./index')

// add
describe('Addition', () => {
    it('add two numbers', () => {
        const result = add(0.1,0.2)

        expect(result).toBe(0.3)
    })
})

// subtract
describe('Subtraction', () => {
    it('subtract two numbers', () => {
        const result = subtract(1.5, 0.5)

        expect(result).toBe(1)
    })
})

// multiply
describe('Multiplication', () => {
    it('multiply two numbers', () => {
        const result = multiply(25, 4)

        expect(result).toBe(100)
    })
})

// divide
describe('Division', () => {
    it('divide one number by other number', () => {
        const result = divide(100, 4)

        expect(result).toBe(25)
    })
})