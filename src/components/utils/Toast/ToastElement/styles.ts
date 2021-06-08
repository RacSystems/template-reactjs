import styled, { css } from 'styled-components';

import { animated } from 'react-spring';

import colors from 'styles/colors';

const toastTypeVariations = {
  info: css`
    background: ${colors.tertiary};
    color: ${colors.white};
  `,
  success: css`
    background: ${colors.secondary};
    color: ${colors.white};
  `,
  error: css`
    background: ${colors.danger};
    color: ${colors.white};
  `,
};

interface IContainerProps {
  type?: 'success' | 'error' | 'info';
}
export const Container = styled(animated.div)<IContainerProps>`
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  max-width: 25rem;
  padding: 1rem;
  position: relative;
  width: 100%;

  ${props => toastTypeVariations[props.type || 'info']};
`;

export const Description = styled.div`
  flex: 1;
  margin-left: 1rem;
  position: relative;
`;

export const Title = styled.strong`
  font-weight: 500;
`;

export const Explain = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  opacity: 0.8;
`;

export const Close = styled.button`
  background: ${colors.transparent};
  border: 0;
  color: inherit;
  margin-left: 0.5rem;
  width: 1.5rem;
`;
