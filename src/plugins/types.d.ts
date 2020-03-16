export interface AppDialogOptions {
	showCancelBtn?: boolean;
	cancelBtnText?: string;
	okBtnText?: string;
	title: string;
	message: string;
	visible?: boolean;
	dialogType?: string;
	onConfirm?: () => void;
}

export interface AppDialogInstance {
	show(params: AppDialogOptions): () => void;
}
