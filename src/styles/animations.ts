import { keyframes } from 'styled-components';

export const shimmer = keyframes`
  from {
    background-position: -1000px 0;
  }

  to {
    background-position: 1000px 0;
  }
`;
