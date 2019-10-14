import { createGlobalStyle } from '../typed-components';

export default createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.bgColor}
  }
`;
