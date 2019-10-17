import { createGlobalStyle } from '../typed-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  * {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif !important;
    box-sizing: border-box;
    background-color: ${props => props.theme.bgColor}
  }
  body {
    min-height: ${props => props.theme.minHeight};
  }
`;
