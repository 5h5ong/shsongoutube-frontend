import baseStyled, { ThemedStyledInterface } from 'styled-components';
export const theme = {
  boxShadow:
    '0 12px 19px 2px rgba(34,0,51,.04),0 6px 22px 4px rgba(7,48,114,.12),0 6px 10px -4px rgba(14,13,26,.12);',
  bgColor: '#fbfbfe'
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
