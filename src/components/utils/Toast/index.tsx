import { useTransition } from 'react-spring';

import { Container } from './styles';
import ToastElement, { IToastElementMessageProps } from './ToastElement';

interface IToastProps {
  messages?: IToastElementMessageProps[];
}

const Toast: React.FC<IToastProps> = ({ messages = [] }) => {
  const messagesWithTransition = useTransition(
    messages,
    message => message.id,
    {
      from: {
        opacity: 0,
        right: '-120%',
      },
      enter: {
        opacity: 1,
        right: '0%',
      },
      leave: {
        opacity: 0,
        right: '-120%',
      },
    },
  );

  return (
    <Container>
      {messagesWithTransition.map(({ item, key, props }) => (
        <ToastElement key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default Toast;
