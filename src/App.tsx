import { Router } from 'react-router-dom';

import Routes from 'routes';
import ErrorBoundary from 'routes/ErrorBoundary';

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
