import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { Theme } from './Styles/Style';

// Theme에 기반한 styled-components의 모듈들?
const {
  default: styled,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { createGlobalStyle, ThemeProvider };
export default styled;
