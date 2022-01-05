import styled from 'styled-components';

import colors from './colors';

export const Root = styled.div`
  display: grid;
  position: relative;
  width: 100%;

  @media (min-width: 900px) {
    grid-template-columns: 12rem 1fr;
    overflow: hidden;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  overflow-x: hidden;

  @media (min-width: 900px) {
    left: 12rem;
    position: relative;
    width: calc(100vw - 12rem);
  }
`;

export const Global = styled.main`
  background-color: ${colors.background};
  min-height: calc(100vh - 7rem);
  overflow-x: auto;
  padding: 1rem;
  width: 100%;

  @media (min-width: 900px) {
    padding: 2rem 3rem;
  }
`;
