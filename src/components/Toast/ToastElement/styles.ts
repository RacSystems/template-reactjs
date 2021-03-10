import styled, { css } from 'styled-components';

import { animated } from 'react-spring';

import colors from 'styles/colors';

interface IContainerProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: ${colors.tertiary};
    color: ${colors.secondaryText};
  `,
  success: css`
    background: ${colors.secondary};
    color: ${colors.tertiary};
  `,
  error: css`
    background: ${colors.danger};
    color: ${colors.tertiary};
  `,
};

export const Container = styled(animated.div)<IContainerProps>`
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  margin-right: 2.4rem;
  margin-top: 0.8rem;
  max-width: 36rem;
  padding: 1.6rem;
  position: relative;
  width: 100%;

  ${props => toastTypeVariations[props.type || 'info']};
`;

export const Description = styled.div`
  flex: 1;
  margin-left: 0.8rem;
  position: relative;
`;

export const Title = styled.strong`
  font-weight: 500;
`;

export const Explain = styled.p`
  font-size: 1.4rem;
  line-height: 1.4rem;
  margin-top: 0.4rem;
  opacity: 0.8;
`;

export const Close = styled.button`
  background: ${colors.transparent};
  border: 0;
  color: inherit;
  margin-left: 0.8rem;
  width: 3rem;
`;
