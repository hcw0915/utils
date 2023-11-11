import { useEffect, useState, KeyboardEvent } from 'react'

/**
 * Custom React Hook to detect the currently pressed key.
 *
 * @returns {string | undefined} The currently pressed key or undefined if no key is pressed.
 */
export function useKeyPressDetect(): string | undefined {
	const [keyPressed, setKeyPressed] = useState<string | undefined>(undefined)

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== 'undefined') {
			/**
			 * Event listener to handle key press.
			 *
			 * @param {KeyboardEvent} e - The keyboard event.
			 * @returns {void}
			 */
			const handleKeyPressed = ((e: KeyboardEvent): void => {
				setKeyPressed(e.key)
			}) as unknown as EventListener

			/**
			 * Event listener to handle key release.
			 *
			 * @returns {void}
			 */
			const handleKeyReleased = ((): void => {
				setKeyPressed(undefined)
			}) as unknown as EventListener

			// Add event listener
			window.addEventListener('keydown', handleKeyPressed)
			window.addEventListener('keyup', handleKeyReleased)

			// Remove event listener on cleanup
			return () => {
				window.removeEventListener('keydown', handleKeyPressed)
				window.removeEventListener('keyup', handleKeyReleased)
			}
		}
	}, []) // Empty array ensures that effect is only run on mount

	return keyPressed
}
