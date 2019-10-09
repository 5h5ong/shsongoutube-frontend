import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Auth from '../Routes/Auth';

type AppRouterProps = {
  isLoggedIn: boolean;
};

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Detail' component={Detail} />
    </Switch>
  );
};
const LoggedOutRoutes = () => {
  return <Route path='/Auth' component={Auth} />;
};

const AppRouter = ({ isLoggedIn }: AppRouterProps) => {
  return <>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</>;
};

export default AppRouter;
