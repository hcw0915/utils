import './App.css'
import { CopyToClipboard } from '@/hooks/useCopyToClipboard'
import { KeyPressDetect } from '@/hooks/useKeyPressDetect'
import { LocalStorage } from '@/hooks/useLocalStorage'

function App() {
	return (
		<>
			{/* <CopyToClipboard /> */}
			{/* <KeyPressDetect /> */}
			<LocalStorage />
		</>
	)
}

export default App
