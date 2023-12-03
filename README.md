### Installation & Scripts

```
npm install
```

### Data Structure

- `function` : 存放資料處理用函式
- `hooks` : 存放 React Custom Hooks
- `utils` : 存放 通用型的 function

### Pull Request

- 複製 repo 下來 : `git clone https://github.com/hcw0915/utils.git`
- 建立自己的分支 : `git checkout -b <你的分支名稱>`
- 經過 add / commit 之後，推上遠端分支 : `git push -u origin <你的分支名稱>`
- 建立 PR ， message 需要遵循 git messages rules
  > `docs: New description in README.md. ` > `feat: add ipCheck(fn) & ipCheck.test.js     `
- 每次推 code 之前，可以先 pull 新的下來喔。不然線上解衝突還挺麻煩的。

  ```js
  - docs: 文件類型檔案
  - feat: 新增功能(feature)
  - fix: 修復(修復 bug)
  - refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)
  - style : 格式 (不影響程式碼運行的變動)
  - test: 測試(增加測試)
  ```

- PR reviewer: hcw0915 / s80220ak
- PR assign: 推 PR 的人
- 經過 PR 回復意見後才可以 Merge (for collaborator)
- 自己的 PR 自己 Merge

### 其他

如果在其他地方有看到其他類似功能，也可以更新上來，不限制寫法。
但如果有寫法上多樣的趨勢，則會擇期另外協調彙整內容，或是聯繫管理者。

### Updated Log

- 23/12/03 - hooks - 可以儲存一個值的上一個狀態
- 23/11/26 - js - isInViewport 檢查元素是否在視窗可視範圍內
- 23/11/04 - hooks - useCopyToClipboard 複製剪貼版使用
- 23/10/29 - js - lengthCheck 變數長度確認
- 23/10/27 - js - validatePassword 密碼驗證(大寫、小寫、數字)
