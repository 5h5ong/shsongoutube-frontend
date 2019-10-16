import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Auth from '../Routes/Auth';

type AppRouterProps = {
  isLoggedIn: boolean;
};

// sign in 여부에 따라 header 표시 다르게
const Switches = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Detail' component={Detail} />
        <Route path='/streaming/:filename/:videoId' component={Detail} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </>
  );
};

const AppRouter = ({ isLoggedIn }: AppRouterProps) => {
  return (
    <>
      <Header />
      <Switches />
    </>
  );
};

export default AppRouter;
