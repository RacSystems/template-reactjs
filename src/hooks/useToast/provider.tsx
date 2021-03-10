import { createContext, useCallback, useEffect, useState } from 'react';

import { v4 as uuidV4 } from 'uuid';

import Toast from 'components/Toast';
import { IToastElementMessageProps } from 'components/Toast/ToastElement';
import ToastManager from 'components/Toast/ToastManager';

import { IUseToastContext } from './index';

export type IShowToastDTO = Omit<IToastElementMessageProps, 'id'>;

export const ToastContext = createContext<IUseToastContext>(
  {} as IUseToastContext,
);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastElementMessageProps[]>([]);

  const show = useCallback(({ description, title, type }: IShowToastDTO) => {
    const id = uuidV4();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages(state => [...state, toast]);
  }, []);

  const hide = useCallback((id: string) => {
    setMessages(messagesCurrent =>
      messagesCurrent.filter(messageCurrent => messageCurrent.id !== id),
    );
  }, []);

  useEffect(() => {
    ToastManager.register({ show, hide });

    return () => {
      ToastManager.unregister();
    };
  }, [hide, show]);

  const handlesExported = {
    show,
    hide,
  };

  const statesExported = {};

  return (
    <ToastContext.Provider value={{ ...handlesExported, ...statesExported }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
