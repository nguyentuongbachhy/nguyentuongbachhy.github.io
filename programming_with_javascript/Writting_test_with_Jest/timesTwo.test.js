const timesTwo = require('./timesTwo')

test('return the value 2 multiplied by the number', () => {
    expect(timesTwo(10)).toBe(20)
})
