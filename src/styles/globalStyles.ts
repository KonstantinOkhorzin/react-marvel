import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  html {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
    line-height: inherit;
  }
  input::-ms-clear {
    display: none;
  }
  input,
  textarea,
  button,
  select {
    background-color: inherit;
    color: inherit;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  a,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: none;
  }
  ul,
  ol,
  menu li {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b {
    font-size: inherit;
    font-weight: inherit;
  }
  mark {
    background: inherit;
    color: inherit;
  }
  address {
    font-style: normal;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  body {
    height: 100%;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;
