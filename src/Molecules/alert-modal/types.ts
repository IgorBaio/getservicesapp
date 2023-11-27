export interface AlertModalProps {
	visible: boolean;
	title: string;
	onConfirm: () => void;
	onCancel: () => void;
	onSwipeCancel: () => void;
}

export interface TouchProps {
	backgroundColor: string;
}
