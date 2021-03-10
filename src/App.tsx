import React from 'react';

import { Router } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';

import Routes from 'routes';

import navigation from 'services/navigation';

import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <Router history={navigation}>
          <Routes />
        </Router>
      </ErrorBoundary>

      <GlobalStyle />
    </>
  );
};

export default App;
