import React, { useState } from "react";
import { usePrevious } from "./usePrevious";

/**
 * 文字編輯器組件，展示了當前文本及其前一個狀態。
 * 使用者可以在文本區輸入文字，組件將顯示當前文字及其前一次的狀態。
 *
 * @returns {React.Component} 文字編輯器組件。
 */
export const TextEditor = () => {
  const [text, setText] = useState<string>("");
  const prevText = usePrevious(text);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <div>
        <p>當前狀態: {text}</p>
        <p>上一個狀態: {prevText}</p>
      </div>
    </div>
  );
};
