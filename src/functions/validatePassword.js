/**
 * 驗證密碼是否符合特定條件。
 * @param {string} password - 要驗證的密碼。
 * @param {number} minLength - 密碼的最小長度。
 * @param {string} options - 驗證的條件選項（'unrestricted', 'alphaNumeric', 'upperLowerCase', 'complexEnough'）。
 * @returns {boolean} - 返回密碼是否符合條件的布爾值。
 */
function validatePassword(password, minLength, options) {
	const conditions = {
		unrestricted: password.length >= minLength,
		alphaNumeric:
			/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/.test(password) &&
			password.length >= minLength,
		upperLowerCase:
			/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password) &&
			password.length >= minLength,
		complexEnough:
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/.test(password) &&
			password.length >= minLength
	}

	switch (options) {
		case 'unrestricted':
			return conditions.unrestricted
		case 'alphaNumeric':
			return conditions.alphaNumeric
		case 'upperLowerCase':
			return conditions.upperLowerCase
		case 'complexEnough':
			return conditions.complexEnough
		default:
			return false // 預設情況為不通過
	}
}

// Test Cases
const password1 = 'password123'
const password2 = 'SecurePassword1'
const password3 = 'StrongPassword!1'
const minLength = 8

console.log(validatePassword(password1, minLength, 'unrestricted')) // true
console.log(validatePassword(password1, minLength, 'alphaNumeric')) // true
console.log(validatePassword(password2, minLength, 'upperLowerCase')) // true
console.log(validatePassword(password3, minLength, 'complexEnough')) // true
