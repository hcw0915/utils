/**
 * 檢查值的長度，如果不符合規定或是空值就會回復 0
 * @param {*} arg - 任意類型的值
 * @returns {number} - 返回值的長度，如果不符合規定或是空值則為 0
 * @description 可以配合 !variableLengthCheck(arg) 檢查是否為空。
 */

const checkLength = (arg) => {
	if (arg === null || arg === undefined)
		throw new Error('Argument cannot be null or undefined')
	if (Array.isArray(arg)) return arg.length
	if (typeof arg === 'string') {
		const trimmedArg = arg.trim()
		if (trimmedArg !== '') return trimmedArg.length
		return 0
	}
	if (typeof arg === 'object' && arg !== null) {
		if (arg instanceof Map) return arg.size
		return Object.keys(arg).length
	}
	throw new Error('Argument must be of type array, string, object, or Map')
}

// Test Cases
const map = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three']
])

console.log('Array Length:', checkLength([1, 2, 3, 4, 5])) // output: 5
console.log('Object Length:', checkLength({ a: 1, b: 2, c: 3 })) // output: 3
console.log('String Length:', checkLength('Hello')) // output: 5
console.log('Empty Array Length:', checkLength([])) // output: 0
console.log('Empty Object Length:', checkLength({})) // output: 0
console.log('Empty String Length:', checkLength('')) // output: 0
console.log('Whitespace String Length:', checkLength(' ')) // output: 0
console.log('Map Size:', checkLength(map)) // output: 3
console.log('Undefined Test:', checkLength(undefined)) // Throws Error
console.log('Null Test:', checkLength(null)) // Throws Error
console.log('Boolean Test:', checkLength(true)) // Throws Error
