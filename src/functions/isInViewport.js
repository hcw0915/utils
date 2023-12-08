/**
 * 檢查元素是否在視窗可視範圍內，可以將這個函式應用於滾動事件監聽，實現懶加載圖片、動畫觸發或其他元素可見性的交互
 * @param {HTMLElement} elem - 要檢查的元素
 * @returns {boolean} 如果元素在視窗可視範圍內，返回true，否則返回false
 */
function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 測試
const element = document.querySelector("#some-element");
console.log(isInViewport(element)); // 根據元素是否在視窗中，返回true或false
