import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
    
  } 50% {
    opacity: .3;

  } 100% {
    opacity: 1;
    transform: translateX(0);    
  }
`;

export const ContainerMessageBox = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  
  @media(max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardMessageBox = styled.div`
  background-color: ${props => props.theme.color.tertiary};
  border-radius: 0.7rem;
  color: ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  height: 26rem;
  margin: 1rem 0;
  padding: 3rem 2rem;
  width: 48%;
  
  animation: ${animate} .5s;
  
  > h1 {
    font-size: 2.8rem;
    
    > img {
      margin-left: 0.7rem;
      width: 3.5rem;
    }
  }
  
  > p {
    font-size: 1.8rem;
  }
  
  > div {
    display: flex;
    font-size: 1.2rem;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }

  @media(max-width: 770px) {    
    width: 100%;
    
    > h1 {
      font-size: 2.2rem;
      
      > img {
        width: 2.5rem;
      }
    }
    
    > p {
      font-size: 1.6rem;
      margin-top: 1rem;
    }
  }  
`;


