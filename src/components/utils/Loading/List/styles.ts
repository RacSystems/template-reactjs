import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  from {
    background-position: -1000px 0;
  }
  to {
    background-position: 1000px 0;
  }
`;

interface IItemsBodyLoadingProps {
  addColorRow?: boolean;
}

export const ItemsBodyLoading = styled.div<IItemsBodyLoadingProps>`
  align-items: center;
  animation: ${shimmer} 2s infinite linear;
  background: linear-gradient(
    to right,
    transparent 4%,
    #fafafa 25%,
    transparent 36%
  );
  background-size: 1000px 100%;
  column-gap: 0.5rem;
  display: grid;
  min-height: 3rem;
  padding: 0 1rem;
  width: 100%;
  ${props =>
    props.addColorRow &&
    css`
      background: linear-gradient(
        to right,
        #eff1f3 4%,
        #e2e2e2 25%,
        #eff1f3 36%
      );
    `}
`;
