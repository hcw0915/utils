import { useRef, useEffect } from "react";

/**
 * 用於儲存組件中某個值的前一個狀態
 *
 * @param {any} value 需要被追蹤為上一個狀態的值
 * @returns {any} 返回該值的上一個狀態
 */

export const usePrevious = (value: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
