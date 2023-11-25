import { useState } from 'react'

let cache: any
export const useLocalStorage = <T,>(key: string, initialValue: T) => {
	/**
	 * To confirm localStorage value exists or not,
	 * if doesn't exist, take initialValue as initial in useState
	 */
	cache = initialValue
	const storedValue = localStorage.getItem(key)
	const initial = storedValue ? JSON.parse(storedValue) : initialValue

	const [value, setValue] = useState(initial)

	/**
	 * We could just mutate the value by handling SetState
	 * Set / clear / reset
	 */
	const setStorage = (newValue: T) => {
		setValue(newValue)
		localStorage.setItem(key, JSON.stringify(newValue))
	}

	const clearStorage = () => {
		localStorage.removeItem(key)
	}

	const resetStorage = () => {
		setValue(cache)
		localStorage.setItem(key, JSON.stringify(cache))
	}

	return [value, setStorage, clearStorage, resetStorage]
}
