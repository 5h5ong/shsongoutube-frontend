import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Auth from '../Routes/Auth';

const LoginRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Detail' component={Detail} />
    </Switch>
  );
};
const AppRouter = () => {
  return <LoginRoutes />;
};

export default AppRouter;
