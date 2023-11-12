import './App.css'
import { CopyToClipboard } from './hooks/useCopyToClipboard'
import { KeyPressDetect } from './hooks/useKeyPressDetect'

function App() {
	return (
		<>
			<CopyToClipboard />
			<KeyPressDetect />
		</>
	)
}

export default App
