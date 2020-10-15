import styled from "styled-components";

export const Grid = styled.div`
  background-color: lightseagreen;
  display: grid;
  grid-template-areas: 
  "Aside Header"
  "Aside Main";
  grid-template-columns: 25rem auto;
  grid-template-rows: 7rem auto;
  height: 100vh;
  
  @media(max-width: 600px ) {
    grid-template-areas: 
      "Header"
      "Main"
    ;
    grid-template-columns: 100%;
    grid-template-rows: 7rem auto;
  } 
`;
