module.exports = {
    returnTwo: (int) => {
        return 2
    },
    greeting: (name) => {
        return `Hello, ${name}.`
    },
    add: (num1, num2) => {
        let sum = num1 + num2
        return sum
    },
    multiply: (num1, num2) => {
        let product = num1 * num2
        return product
    },
   divide: (num1, num2) => {
        let quotient = num1 / num2
        return quotient
    },
    subtract: (num1, num2) => {
        let difference = num1 - num2
        return difference
    }
}