import tryAgain from 'assets/utils/try-again.svg';

import { Container, ErrorImage, ErrorMessage, TryAgain } from './styles';

interface IComponentErrorProps {
  message: string;
  onClick: () => void;
}

const ComponentError: React.FC<IComponentErrorProps> = ({
  message,
  onClick,
}) => {
  return (
    <Container>
      <ErrorImage src={tryAgain} />
      <ErrorMessage>{message}</ErrorMessage>
      <TryAgain onClick={onClick}>Tentar novamente</TryAgain>
    </Container>
  );
};

export default ComponentError;
