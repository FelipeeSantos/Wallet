import styled, {keyframes} from "styled-components";

interface ILegend {
  color: string
}

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

export const CartesianChartBoxSection = styled.section`
  align-items: center;
  background-color: ${props => props.theme.color.tertiary};
  border-radius: 0.7rem;
  color: ${props => props.theme.color.white};
  height: 34rem;
  margin: 1rem 0;
  padding: 3rem 2rem 6rem 2rem;
  width: 100%;
  
  > div {      
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    @media(max-width: 1200px) {
      display: flex;
      flex-direction: column;
    }
    
    > h2 {
      font-size: 2.2rem;
      margin-bottom: 2rem;
      
      @media(max-width: 1200px) {
        margin-bottom: 1rem;
      }
    }
  }
  
  animation: ${animate} .5s;
`;

export const LegendContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const Legend = styled.li<ILegend>`
  align-items: center;
  display: flex;
  margin-bottom: 0.7rem;
  margin-left: 1rem;
  
  @media(max-width: 1200px) {
    margin: 0 1rem 0.7rem 0;
  }
  
  > div {
    background-color: ${props => props.color};
    border-radius: 0.5rem;
    font-size: 1.8rem; 
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    width: 4rem;  
    
    @media(max-width: 1200px) {
      height: 2rem;
      width: 2rem;
    }
  }
  
  span {
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
`;


