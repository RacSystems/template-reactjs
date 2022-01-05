import styled, { css } from 'styled-components';

import colors from './colors';

export const PageTitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

interface IPageTitleProps {
  hasBackButton?: boolean;
}
export const PageTitle = styled.h1<IPageTitleProps>`
  align-items: center;
  color: ${colors.text};
  display: grid;
  flex: 1;
  font-size: 1.5rem;
  grid-template-columns: 1fr;

  ${props =>
    props.hasBackButton &&
    css`
      grid-template-columns: 2.5rem 1fr;
    `};
`;
