import { createGlobalStyle } from '../typed-components';

export default createGlobalStyle`
  body {
    background-color: ${props => props.theme.bgColor}
  }
`;
