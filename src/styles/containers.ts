import styled from 'styled-components';

import colors from './colors';

const Root = styled.div`
  display: grid;
  position: relative;
  width: 100%;

  @media (min-width: 900px) {
    grid-template-columns: 12rem 1fr;
    overflow: hidden;
  }
`;

const Main = styled.main`
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

const Global = styled.main`
  background-color: ${colors.mainBackground};
  min-height: calc(100vh - 7rem);
  overflow-x: auto;
  padding: 1rem;
  width: 100%;

  @media (min-width: 900px) {
    padding: 2rem 3rem;
  }
`;

export default {
  Global,
  Main,
  Root,
};
