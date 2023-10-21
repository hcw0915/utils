/**
 * 檢查表單輸入是否為空
 * @param {string} value - 要檢查的值
 * @returns {boolean} 如果輸入為空則返回 true，否則返回 false
 */
const isFieldEmpty = (value) => {
	return value.trim() === ''
}

// input: ''
// output: true

// input: 'Hello'
// output: false

// -----------------------------------------------------------------

/**
 * 檢查是否為有效的電子郵件格式
 * @param {string} email - 要檢查的電子郵件
 * @returns {boolean} 如果是有效的電子郵件則返回 true，否則返回 false
 */
const isValidEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

// input: 'test@example.com'
// output: true

// input: 'invalid_email'
// output: false

// -----------------------------------------------------------------

module.exports = { isValidEmail, isFieldEmpty }
