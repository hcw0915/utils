import { useState, ChangeEvent } from 'react'
import { useCopyToClipboard } from './useCopyToClipBoard'

export function CopyToClipboard(): JSX.Element {
	const [copyToClipboard, { isSuccess, value }] = useCopyToClipboard()
	const [data, setData] = useState<string>('')

	const handleClick = () => {
		copyToClipboard(data, {
			debug: true,
			message: 'Press #{key} to copy'
		})
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setData(e.target.value)

	console.log('Copy Success: ', isSuccess)
	console.log('Copy Value: ', value)

	return (
		<div className="App">
			<button onClick={handleClick}>Copy Text</button>
			<input type="text" value={data} onChange={handleChange} />
		</div>
	)
}
