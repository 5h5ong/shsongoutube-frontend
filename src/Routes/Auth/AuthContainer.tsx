import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { CHECK_EMAIL } from './AuthQueries';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';
import { AnyTxtRecord } from 'dns';

interface checkEmailInventory {
  checkEmail: boolean;
}

const AuthContainer = () => {
  const [loginAction, setLoginAction] = useState('login');
  const emailInput = useInput('call5h5ong@gmail.com');
  const [checkEmailMutation] = useMutation(CHECK_EMAIL, {
    variables: { email: emailInput.value }
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginAction === 'login') {
      const {
        data: { checkEmail }
      }: any = await checkEmailMutation();
      // check email
      if (checkEmail) {
        setLoginAction('signup');
      } else {
        console.error('존재하지 않는 이메일입니다!');
      }
    }
  };

  return (
    <AuthPresenter
      loginAction={loginAction}
      emailInput={emailInput}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
