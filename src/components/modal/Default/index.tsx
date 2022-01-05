import {
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';

import { useHotkeys } from 'react-hotkeys-hook';

import ComponentIsVisible from 'components/utils/IsVisible';

import ComponentBackdrop from '../Backdrop';
import { Container } from './styles';

export interface IComponentModalDefaultRefProps {
  close: () => void;
  open: () => void;
}

interface IComponentModalDefaultProps {
  children: ReactNode;
}

const ComponentModalDefault: React.ForwardRefRenderFunction<
  IComponentModalDefaultRefProps,
  IComponentModalDefaultProps
> = ({ children }, ref) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpened(false);
  }, []);

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }));

  useHotkeys('esc', () => closeModal());

  return (
    <ComponentIsVisible when={isOpened}>
      <Container>
        <ComponentBackdrop onClick={closeModal} />
        {children}
      </Container>
    </ComponentIsVisible>
  );
};

export default forwardRef(ComponentModalDefault);
