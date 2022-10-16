type ModalActionFunction = () => void;

export interface ModalParams {
  message: string;
  buttonOk?: boolean;
  buttonCancel?: boolean;
  buttonOkAction?: ModalActionFunction;
  buttonCancelAction?: ModalActionFunction;
  buttonOkText?: string;
  buttonCancelText?: string;
}
