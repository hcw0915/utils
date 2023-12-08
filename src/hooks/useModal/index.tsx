import { useModal } from './useModal'

export const UseModal: React.FC = () => {
	const { isModalOpen, openModal, closeModal, Modal } = useModal()

	return (
		<div>
			<h1>My App</h1>
			<button onClick={openModal}>Open Modal</button>

			{isModalOpen && (
				<Modal isModalOpen={isModalOpen} closeModal={closeModal}>
					<p>This is a modal!</p>
				</Modal>
			)}
		</div>
	)
}
