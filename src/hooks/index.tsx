import UseToastProvider from './useToast/provider';

const AppProvider: React.FC = ({ children }) => {
  return <UseToastProvider>{children}</UseToastProvider>;
};

export default AppProvider;
