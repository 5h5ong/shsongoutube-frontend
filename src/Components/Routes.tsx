import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../Routes/Home';
import Detail from '../Routes/Detail';
import Auth from '../Routes/Auth';
import Profile from '../Routes/Profile';

type AppRouterProps = {
  isLoggedIn: boolean;
};

// sign in 여부에 따라 header 표시 다르게
const Switches = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail' component={Detail} />
        <Route path='/streaming/:filename/:videoId' component={Detail} />
        <Route path='/auth' component={Auth} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </>
  );
};

const AppRouter = ({ isLoggedIn }: AppRouterProps) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Switches />
    </>
  );
};

export default AppRouter;
