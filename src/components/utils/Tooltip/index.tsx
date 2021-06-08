import { TooltipContainer, TooltipTitle } from './styles';

interface ITooltipProps {
  hasButton?: boolean;
  title: string;
}

const Tooltip: React.FC<ITooltipProps> = ({ children, hasButton, title }) => {
  return (
    <TooltipContainer hasButton={hasButton}>
      {children}
      <TooltipTitle>{title}</TooltipTitle>
    </TooltipContainer>
  );
};

export default Tooltip;
