const BOX_SHADOW =
  '0 12px 19px 2px rgba(34,0,51,.04),0 6px 22px 4px rgba(7,48,114,.12),0 6px 10px -4px rgba(14,13,26,.12);';
const BORDER_RADIUS = '16px';

export const theme = {
  bgColor: '#fbfbfe',
  btnColor: '#0060df',
  headerColor: '#bbded6',
  linkColor: 'black',
  whiteBox: `background-color: white;
             box-shadow: ${BOX_SHADOW};
             border-radius: ${BORDER_RADIUS};
             justify-content: center;
             padding: 40px;
  `,
  whiteInput: `border: 1px solid #b5b5b5;
               width: 100%;
               height: 48px;
               padding: 0 0 0 16px;
               border-radius: 8px;
               font-size: 16px;
               font-weight: 400;
  `,
  minHeight: '800px',
  minWidth: '512px'
};
export type Theme = typeof theme;
