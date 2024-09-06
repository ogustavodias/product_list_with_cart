import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Red Hat Text", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
 }

  body {
    min-height: 100vh;
    background-color: ${colors.rose100};
  }

  img {
    display: block;
    max-width: 100%;
  }

  li {
    list-style: none;
  }

  button {
    display: block;
    border: none;
    outline: none;
  } 

  .container {
    padding: 60px;
    max-width: 1440px;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
      padding: 30px;
    }
  }

  .app-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: start;
    gap: 30px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyles;
