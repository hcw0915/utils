import "./App.css";
import { CopyToClipboard } from "./hooks/useCopyToClipboard";
import { TextEditor } from "./hooks/usePrevious";

function App() {
  return (
    <>
      <CopyToClipboard />
      <TextEditor />
    </>
  );
}

export default App;
