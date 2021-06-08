import styled from 'styled-components';

import { shade } from 'polished';

import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.2rem;
`;

export const ErrorImage = styled.img`
  margin-bottom: 1.6rem;
  max-width: 12rem;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  font-size: 1.6rem;
`;

export const TryAgain = styled.button`
  background-color: ${colors.primary};
  border: 0;
  border-radius: 0.8rem;
  color: ${colors.secondary};
  font-size: 1.5rem;
  font-weight: 500;
  height: 4rem;
  margin: 1.6rem 0 0;
  padding: 0 2.4rem;

  @media (min-width: 850px) {
    &:hover {
      background-color: ${shade(0.1, colors.primary)};
    }
  }
`;
