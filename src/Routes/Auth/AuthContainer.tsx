import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { useHistory } from 'react-router-dom';
import { CHECK_EMAIL, LOGIN, LOCAL_LOGIN } from './AuthQueries';
import AuthPresenter from './AuthPresenter';
import useInput from '../../Hooks/useInput';

const AuthContainer = () => {
  const history = useHistory();
  const [loginAction, setLoginAction] = useState('login');
  const emailInput = useInput('');
  const secretInput = useInput('');
  const [checkEmailMutation] = useMutation(CHECK_EMAIL, {
    variables: { email: emailInput.value }
  });
  const [loginMutation] = useMutation(LOGIN, {
    variables: { email: emailInput.value, secretKey: secretInput.value }
  });
  const [localLoginMutation] = useMutation(LOCAL_LOGIN);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginAction === 'login') {
      const {
        data: { checkEmail }
      }: any = await checkEmailMutation();
      // check email
      if (checkEmail) {
        setLoginAction('confirm');
      } else {
        console.error('존재하지 않는 이메일입니다!');
      }
    } else if (loginAction === 'confirm') {
      try {
        const {
          data: { login }
        }: any = await loginMutation();
        // frontend에 token 전달
        await localLoginMutation({ variables: { token: login } });
      } catch (e) {
        console.error(e);
      }
      // go to homepage
      history.push('/');
      // reload
      window.location.reload();
    }
  };

  return (
    <AuthPresenter
      loginAction={loginAction}
      emailInput={emailInput}
      onSubmit={onSubmit}
      secretInput={secretInput}
    />
  );
};

export default AuthContainer;
