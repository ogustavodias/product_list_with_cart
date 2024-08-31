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

  button {
    display: block;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
