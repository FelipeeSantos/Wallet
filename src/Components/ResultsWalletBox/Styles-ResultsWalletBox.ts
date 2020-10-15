import styled from "styled-components";

interface ICardsBox {
  color: string;
}

export const CardsBox = styled.div<ICardsBox>`
  background-color: ${props => props.color};
  border-radius: 0.7rem;
  color:${props => props.theme.color.white};
  height: 15rem;
  margin: 1rem 0;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  width: 32%;
  
  > img {
    height: 110%;
    opacity: .3;
    position: absolute;
    right: -2.7rem;
    top: -1rem;
  }
  
  > span {
    font-size: 1.6rem;
    font-weight: 500;
  }
  
  > h1 {
    font-size: 3.2rem;
  }
  
  > small {
    bottom: 1rem;
    font-size: 1.2rem;
    position: absolute;
  }
  
  @media(max-width: 770px) {
    padding: 1rem;
    
    > span {
      font-size: 1.2rem;
    }
    
    > h1 {
      font-size: 2.2rem;
    }
  }
  
  @media(max-width: 420px) {
    width: 100%;
  }
`;
