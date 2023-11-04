/**
 * 將陣列當中的元素做升冪排序
 * @param {Array} arr - 需要排序的陣列
 * @param {string} [key] - 如果陣列元素為物件，此為需要排序的屬性
 * @param {("asc"|"desc")} [direction="asc"] - 排序方向：升序或降序
 * @returns {Array} 排序後的陣列
 * @throws {Error} 參數不正確拋出錯誤
 */
const sortArray = (arr, key, direction = "asc") => {
  if (!Array.isArray(arr)) {
    throw new Error("參數必須為陣列");
  }

  if (key) {
    const allHaveKey = arr.every(
      (item) => typeof item === "object" && item.hasOwnProperty(key)
    );
    if (!allHaveKey) {
      throw new Error(`至少有一個物件缺少指定的key:${key}`);
    }
  }

  return [...arr].sort((a, b) => {
    let valueA = a;
    let valueB = b;

    if (typeof a === "object" && key) {
      valueA = a[key];
    }
    if (typeof b === "object" && key) {
      valueB = b[key];
    }

    if (!isNaN(valueA) && !isNaN(valueB)) {
      valueA = parseFloat(valueA);
      valueB = parseFloat(valueB);
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    switch (direction) {
      case "asc":
        return valueA - valueB;
      case "desc":
        return valueB - valueA;
      default:
        throw new Error('排序方向須為"asc"或"desc"');
    }
  });
};

// 測試
const stringArray = ["Banana", "apple", "Cherry"];
const numberArray = ["15", "100", "23", "8"];
const objectArray = [
  { id: 3, fruit: "banana" },
  { id: 1, fruit: "apple" },
  { id: 2, fruit: "cherry" },
];

console.log(sortArray(stringArray)); //  ['apple', 'Banana', 'Cherry']
console.log(sortArray(numberArray)); //  [8, 15, 23, 100]
console.log(sortArray(objectArray, "id")); //  [{ id: 1, fruit: "apple" }, { id: 2, fruit: "cherry" }, { id: 3, fruit: "banana" }]
console.log(sortArray(objectArray, "fruit", "desc")); //  [{ id: 2, fruit: "cherry" }, { id: 3, fruit: "banana" }, { id: 1, fruit: "apple" }]
