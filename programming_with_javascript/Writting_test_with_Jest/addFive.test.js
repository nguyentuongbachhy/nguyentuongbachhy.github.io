const { default: TestRunner } = require('jest')
const addFive = require('./addFive')

test('return the number plus 5', () => {
    expect(addFive(1)).toBe(6)
})
