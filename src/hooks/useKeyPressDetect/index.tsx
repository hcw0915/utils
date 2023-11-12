import { useKeyPressDetect } from './useKeyPressDetect'

export const KeyPressDetect = () => {
	const keyPress = useKeyPressDetect()

	console.log(keyPress)

	return <div>你按下的是: {keyPress}</div>
}
