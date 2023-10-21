const { variableLengthCheck } = require('../libs/variableLengthCheck.js') // 導入你的函數

test('Check array length', () => {
	expect(variableLengthCheck([1, 2, 3, 4, 5])).toBe(5)
})

test('Check object length', () => {
	expect(variableLengthCheck({ a: 1, b: 2, c: 3 })).toBe(3)
})

test('Check string length', () => {
	expect(variableLengthCheck('Hello')).toBe(5)
})

test('Check empty array', () => {
	expect(variableLengthCheck([])).toBe(0)
})

test('Check empty object', () => {
	expect(variableLengthCheck({})).toBe(0)
})

test('Check empty string', () => {
	expect(variableLengthCheck('')).toBe(0)
})

test('Check number input', () => {
	expect(variableLengthCheck(123)).toBe(0)
})

test('Check null input', () => {
	expect(variableLengthCheck(null)).toBe(0)
})

test('Check undefined input', () => {
	expect(variableLengthCheck(undefined)).toBe(0)
})
