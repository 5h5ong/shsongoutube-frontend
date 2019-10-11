const BOX_SHADOW =
  '0 12px 19px 2px rgba(34,0,51,.04),0 6px 22px 4px rgba(7,48,114,.12),0 6px 10px -4px rgba(14,13,26,.12);';
const BORDER_RADIUS = '16px';

export const theme = {
  bgColor: '#fbfbfe',
  btnColor: '#0060df',
  whiteBox: `background-color: white;
             box-shadow: ${BOX_SHADOW};
             padding: 30px;
             border-radius: ${BORDER_RADIUS};
             justify-content: center;
  `
};
export type Theme = typeof theme;
