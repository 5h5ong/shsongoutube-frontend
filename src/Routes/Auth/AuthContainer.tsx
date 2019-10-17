import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { CHECK_EMAIL } from './AuthQueries';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';

const AuthContainer = () => {
  const [loginAction, setLoginAction] = useState('login');
  const emailInput = useInput('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <AuthPresenter
      loginAction={loginAction}
      emailInput={emailInput}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
