import './App.css'
// import { CopyToClipboard } from '@/hooks/useCopyToClipboard'
// import { KeyPressDetect } from '@/hooks/useKeyPressDetect'
// import { LocalStorage } from '@/hooks/useLocalStorage'
import { UseModal } from './hooks/useModal'

function App() {
	return (
		<div style={{ position: 'relative' }}>
			{/* <CopyToClipboard /> */}
			{/* <KeyPressDetect /> */}
			{/* <LocalStorage /> */}
			<UseModal />
		</div>
	)
}

export default App
