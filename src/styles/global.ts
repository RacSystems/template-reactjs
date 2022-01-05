import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    outline: none;
    -webkit-font-smoothing: antialiased !important;
  }

html {
  @media screen and (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media screen and (max-width: 720px) {
    font-size: 87.5%;
  }

  @media (min-width: 900px) {
    ::-webkit-scrollbar {
      background: ${colors.primary};
      height: 0.5rem;
      width: 0.4rem;
    }

    ::-webkit-scrollbar-button {
      height: 0;
      width: 0;
    }

    ::-webkit-scrollbar-track {
      background: ${colors.background};
    }

    ::-webkit-scrollbar-thumb {
      background: ${colors.primary};
      height: 0.5rem;
      width: 0.4rem;
      border-radius: 0 0 0.25rem 0.25rem;
    }
  }
}

html, body, #root {
  min-height: 100vh;
}

body {
  background-color: ${colors.white};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-rendering: optimizeLegibility;
  line-height: 1;
}

body, input, button, textarea {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.text};
}

input, textarea {
  color: ${colors.text};

  &::placeholder {
    color: ${colors.secondaryText};
    font-size: 0.875rem;
    font-weight: 300;
  }
}

button {
  cursor: pointer;
  transition: all .3s ease;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  transition: all .3s ease-in-out;
}

[disabled] {
  opacity: .6;
  cursor: not-allowed;
}
`;
