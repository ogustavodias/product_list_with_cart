import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Red Hat Text", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
 }

  body {
    min-height: 100vh;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;
