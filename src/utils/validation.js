/**
 * 檢查表單輸入是否為空
 * @param {string} value - 要檢查的值
 * @returns {boolean} 如果輸入為空則返回 true，否則返回 false
 */
const isFieldEmpty = (value) => {
	return value.trim() === ''
}

// Test isFieldEmpty
// const inputValue1 = '' // 空字串
// const inputValue2 = 'Hello' // 非空字串

// isFieldEmpty(inputValue1) // 輸出: true
// isFieldEmpty(inputValue2) // 輸出: false

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

// Test isValidEmail
// const validEmail = 'test@example.com' // 有效的電子郵件
// const invalidEmail = 'invalid_email' // 無效的電子郵件

// isValidEmail(validEmail) // 輸出: true
// isValidEmail(invalidEmail) // 輸出: false

// -----------------------------------------------------------------

module.exports = { isValidEmail, isFieldEmpty }
