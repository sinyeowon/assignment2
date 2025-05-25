import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #F7F7F7;           /* 연한 회색 배경 */
  }
  h1, h2, h4, p {
    margin: 0; padding: 0;
  }
`;
