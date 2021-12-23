import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { PageWrapper, ContentWrapper } from './styled';
import LateralMenu from './components/lateralMenu';
import Dashboard from './pages/dashboard';
import Register from './pages/register';

const privateRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/meusregistros',
    component: Register,
  },
];

const Routes = () => {
  return (
    <Switch>
      <PageWrapper>
        <LateralMenu />
        <ContentWrapper>
          {privateRoutes.map((routeConfig) => (
            <Route path={routeConfig.path} component={routeConfig.component} />
          ))}
          
        </ContentWrapper>
      </PageWrapper>
    </Switch>
  );
};

export default Routes;
export { privateRoutes };
