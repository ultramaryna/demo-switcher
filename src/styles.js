import emotion from '@emotion/css/dist/emotion-css.umd.min.js';
const { css } = emotion;

const colors = {
  accent: '#a4d65e',
  background: '#1a1a1a'
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

export const switcher = css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: ${colors.background};
  z-index: 10;
`;

export const list = css`
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

export const demo = css`
  margin: 0 16px;
`;

export const linkItem = css`
  color: white;
`;


