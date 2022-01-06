import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouteWrapper = (): JSX.Element => {
  const isSigned = true;
  return isSigned ? <Outlet /> : <Navigate replace to="/" />;
};

export default PrivateRouteWrapper;
