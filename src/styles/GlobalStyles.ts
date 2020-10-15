import { createGlobalStyle } from "styled-components"

export default  createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5% !important;
  }
  
  body {
    -webkit-font-smoothing: antialiased !important;
    width: 100%;
  }
  
  html, body, #root {
    overflow: hidden;
    height: 100%;
  }
  
  *, button, input {
    border: 0;
    cursor: pointer;
    font-family: "Robot", sans-serif;
    outline: 0; 
  } 
`;
