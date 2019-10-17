import React, { useState } from 'react';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';

const AuthContainer = () => {
  const [loginAction, setLoginAction] = useState('login');
  const emailInput = useInput('');
  return <AuthPresenter loginAction={loginAction} emailInput={emailInput} />;
};

export default AuthContainer;
