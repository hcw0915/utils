/**
 * 將陣列當中的元素做升冪排序
 * @param {Array} arr - 被排序的陣列
 * @param {string} type - 陣列元素的類型
 * @returns {Array} 排序後的陣列
 * @throws {Error} 必須要是英文字串或是數字
 */

const sortAscending = (arr, type) => {
  if (type === 'string') {
    return [...arr].sort((a, b) => {
      const firstValue = a.toLowerCase()
      const secondValue = b.toLowerCase()
      if (firstValue > secondValue) return 1
      if (firstValue < secondValue) return -1
      return 0
    })
  }

  if (type === 'number') {
    return [...arr].sort((a, b) => parseFloat(a) - parseFloat(b))
  }

  throw new Error('陣列元素必須是數字或英文字串')
}

// 測試
const stringArray = ['Banana', 'apple', 'Cherry']
const numberArray = ['15', '100', '23', '8']

console.log(sortAscending(stringArray, 'string')) // ['apple', 'Banana', 'Cherry']
console.log(sortAscending(numberArray, 'number')) // ['8', '15', '23', '100']
