import { useState } from 'react'
import copy from 'copy-to-clipboard'

/**
 * @typedef {CopyToClipboardProps} CopyToClipboardProps
 * @property {(text: string, options?: object) => void}
 *  - text 連接 字串值, options 基本上可暫時忽略，還要研究一下要怎麼用QAQ
 * @property {{ value: string; isSuccess: boolean }}
 *  - 可以儲存複製的字段 以及 是否完成複製 => 後續可以配合 toast / notifications使用
 */
export type CopyToClipboardProps = [
	(text: string, options?: object) => void,
	{ value: string; isSuccess: boolean }
]

export function useCopyToClipboard(): CopyToClipboardProps {
	const [value, setValue] = useState<string>('')
	const [isSuccess, setIsSuccess] = useState<boolean>(false)

	const copyToClipboard = (text: string, options: object = {}) => {
		const result = copy(text, options)
		if (result) setValue(text)
		setIsSuccess(result)
	}

	return [copyToClipboard, { value, isSuccess }]
}
