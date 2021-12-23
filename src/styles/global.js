import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, html, body, #root {
    font-family: 'Nunito', sans-serif;
    outline: none;
    padding: 0px;
    margin: 0px;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

`;
