import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyles = css`
  // emotion Reset CSS
  ${emotionReset}

  // global css
  * {
    font-size: 16px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default globalStyles;
