import styled from "styled-components";

export const MainContent = styled.main`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  grid-area: Main;
  height: calc(100vh - 5rem);
  overflow-y: scroll;
  padding: 2.5rem;
  
  ::-webkit-scrollbar {
    width: 1rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.color.secondary};
    border-radius: 1rem;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.color.tertiary};
  }
`;
