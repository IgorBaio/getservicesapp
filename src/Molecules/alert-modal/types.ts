export interface AlertModalProps {
	visible: boolean;
	title: string;
	onConfirm: () => void;
	onCancel: () => void;
	onSwipeCancel: () => void;
	confirmText?: string;
	cancelText?: string;
}

export interface TouchProps {
	backgroundColor: string;
}
