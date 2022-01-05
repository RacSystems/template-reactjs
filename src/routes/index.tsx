import { Route, Routes as Switch } from 'react-router-dom';

import HelloWorld from 'pages/HelloWorld';

import NotFound from './NotFound';
import RouteWrapper from './RouteWrapper';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route element={HelloWorld} path="/">
        {/* <RouteWrapper component={HelloWorld} index path="/" /> */}

        <RouteWrapper component={NotFound} path="*" />
      </Route>
    </Switch>
  );
};

export default Routes;
