import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased !important;
  }

  @media screen and (max-width: 1080px) {
    html {
      font-size: 94.75%;
    }
  }

  @media screen and (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background-color: ${colors.background};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-rendering: optimizeLegibility;
  }

  body, input, button, textarea {
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.text};
  }

  button {
    cursor: pointer;
    transition: all .3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all .3s ease;
  }
`;
