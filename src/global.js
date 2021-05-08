import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background-color: #0D0C1D;
    color: #EFFFFA;
    display: flex;
    font-family: Roboto;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  textarea:focus, input:focus{
    outline: none;
  }
  `