const { isFieldEmpty, isValidEmail } = require('../utils/validation.js')

describe('Form Validation', () => {
	test('檢查是否正確地檢測空值', () => {
		expect(isFieldEmpty('')).toBe(true)
		expect(isFieldEmpty('Hello')).toBe(false)
	})

	test('檢查是否正確地檢測有效的電子郵件', () => {
		expect(isValidEmail('test@example.com')).toBe(true)
		expect(isValidEmail('invalid_email')).toBe(false)
	})
})
