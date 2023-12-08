import { useLocalStorage } from './useLocalStorage'

export const LocalStorage = () => {
	const [count, setCount, clearCount, resetCount] = useLocalStorage('count', 0)

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={clearCount}>clearCount</button>
			<button onClick={resetCount}>resetCount</button>
		</div>
	)
}
