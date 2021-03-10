import App from 'App';

import AppProvider from 'hooks';

const Root: React.FC = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default Root;
