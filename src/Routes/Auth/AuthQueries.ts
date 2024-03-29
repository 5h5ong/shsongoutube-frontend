import { gql } from 'apollo-boost';

export const CHECK_EMAIL = gql`
  mutation checkEmail($email: String!) {
    checkEmail(email: $email)
  }
`;
export const LOGIN = gql`
  mutation login($email: String!, $secretKey: String!) {
    login(email: $email, secretKey: $secretKey)
  }
`;
export const LOCAL_LOGIN = gql`
  mutation localLogin($token: String!) {
    localLogin(token: $token) @client
  }
`;
