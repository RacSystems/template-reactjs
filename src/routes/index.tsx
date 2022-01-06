import { Route, Routes } from 'react-router-dom';

import HelloWorld from 'pages/HelloWorld';

import NotFound from './NotFound';
import PrivateRouteWrapper from './PrivateRouteWrapper';

const MainRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PrivateRouteWrapper />}>
        <Route element={<HelloWorld />} path="/" />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export default MainRoutes;
