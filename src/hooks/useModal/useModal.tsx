import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)
	const toggleModal = () => setIsModalOpen((prev) => !prev)

	return { isModalOpen, openModal, closeModal, toggleModal, Modal }
}

type ModalProps = {
	children: React.ReactNode
	isModalOpen: boolean
	closeModal: () => void
}

export const Modal = ({ children, isModalOpen, closeModal }: ModalProps) => {
	return ReactDOM.createPortal(
		<div
			className={`modal ${isModalOpen ? 'open' : ''}`}
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '50%',
				height: '50%',
				background: '#e9e9e9',
				color: 'black'
			}}
			onClick={closeModal}
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{children}
				<button className="close-btn" onClick={closeModal}>
					&#x2715;
				</button>
			</div>
		</div>,
		document.body
	)
}
