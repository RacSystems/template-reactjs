import { Route, RouteProps } from 'react-router-dom';

interface IRouteWrapperProps extends RouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<IRouteWrapperProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <>
      <Route {...rest} render={() => <Component />} />
    </>
  );
};

export default RouteWrapper;
