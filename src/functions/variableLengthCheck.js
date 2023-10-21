/**
 * 檢查 值 長度，如果不符合規定或是空值就會回復 0
 * @param {*} arg - any type
 * @returns number
 * @description 可以配合 !variableLengthCheck(arg) 檢查是不是空的。
 */

const variableLengthCheck = (arg) => {
	if (Array.isArray(arg) || typeof arg === 'string') {
		return arg.length
	}
	if (typeof arg === 'object' && arg !== null) {
		return Object.keys(arg).length
	}
	return 0
}

// input: [1, 2, 3, 4, 5]
// output: 5,

// input: { a: 1, b: 2, c: 3 }
// output: 3

// input: 'Hello'
// output: 5

// input: []  => 可以延伸檢查是不是 [], {}, ''
// output: 0

module.exports = { variableLengthCheck }
