import { useContext } from 'react';

import { IShowToastDTO, ToastContext } from './provider';

export interface IUseToastContext {
  hide(id: string): void;
  show(data: IShowToastDTO): void;
}

function useToast(): IUseToastContext {
  const toastContext = useContext(ToastContext);

  return toastContext;
}

export default useToast;
