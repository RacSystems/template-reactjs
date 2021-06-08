import styled, { css } from 'styled-components';

import colors from 'styles/colors';

interface ITooltipContainerProps {
  hasButton?: boolean;
}
export const TooltipContainer = styled.div<ITooltipContainerProps>`
  background-color: ${colors.white};
  display: flex;
  justify-content: flex-end;
  padding: 0 0.5rem;
  position: relative;
  right: 0;

  & svg {
    color: ${colors.danger};
  }

  ${props =>
    props.hasButton &&
    css`
      display: flex;
      grid-column-end: 2;
      grid-column-start: 2;
      justify-content: center;
      position: relative;
      width: 100%;
      z-index: 4;
    `};
`;

export const TooltipTitle = styled.span`
  background: ${colors.danger};
  border-radius: 0.5rem;
  bottom: calc(100% + 0.8rem);
  color: ${colors.white};
  font-size: 0.8rem;
  opacity: 0;
  padding: 0.5rem;
  position: absolute;
  right: 0;
  text-align: center;
  transition: opacity 0.4s ease;
  visibility: hidden;
  width: 130px;
  z-index: 19;

  &::before {
    border-color: ${colors.danger} transparent;
    border-style: solid;
    border-width: 0.45rem 0.45rem 0 0.45rem;
    content: '';
    right: 7%;
    position: absolute;
    top: 100%;
  }

  ${TooltipContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;
