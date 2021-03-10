import React from 'react';

import { Switch } from 'react-router-dom';

import HelloWorld from 'pages/HelloWorld';

import NotFound from './NotFound';
import RouteWrapper from './RouteWrapper';

const Routes: React.FC = () => {
  return (
    <Switch>
      <RouteWrapper component={HelloWorld} exact path="/" />

      <RouteWrapper component={NotFound} path="*" />
    </Switch>
  );
};

export default Routes;
