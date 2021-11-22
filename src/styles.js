import emotion from '@emotion/css/dist/emotion-css.umd.min.js';
const { css } = emotion;

const colors = {
  accent: '#a4d65e',
  dark: '#1a1a1a'
}

export const title = css`
  background-color: ${colors.accent};
  font-size: 1em;
  white-space: nowrap;
  margin: 0;
  text-align: center;
  padding: 8px 16px;
  text-transform: uppercase;
`;

export const homeTitle = css`
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
`;

export const switcher = css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: ${colors.dark};
  z-index: 10;
`;

export const list = css`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
`;

export const demo = css`
  margin: 0 16px;
`;

export const demoBlock = css`
  width: 100%;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    width: calc((100% - 72px) / 3);
  }
`;

export const linkInline = css`
  color: white;
  text-decoration: none;
`;

export const linkBlock = css`
  display: block;
  text-transform: uppercase;
  font-size: 1.25rem;
  text-align: center;
  color: black;
  text-decoration: none;
`;

export const image = css`
  width: 100%;
  margin-bottom: 16px;
`;


