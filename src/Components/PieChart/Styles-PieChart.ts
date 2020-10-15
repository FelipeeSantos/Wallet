import styled, {keyframes} from "styled-components";

interface ILegend {
  color: string
}

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
    
  } 50% {
    opacity: .3;

  } 100% {
    opacity: 1;
    transform: translateX(0);    
  }
`;

export const DivisionPieChart = styled.div`
  animation: ${animate} .5s;
  background-color: ${props => props.theme.color.tertiary};
  border-radius: 0.7rem;
  color: ${props => props.theme.color.white};
  display: flex;
  height: 26rem;
  margin: 1rem 0;
  width: 48%;
  
  @media(max-width: 770px) {
    width: 100%;
  }
`;

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 2rem;
  
  > h2 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  
  @media(max-width: 770px) {
    padding: 1.5rem;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
`;

export const Legend = styled.li<ILegend>`
  align-items: center;
  display: flex;
  margin-bottom: 0.7rem;
  
  > div {
    background-color: ${props => props.color};
    border-radius: 0.5rem;
    font-size: 1.8rem; 
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    width: 5.2rem;
 
  }
  
  span {
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
`;

export const SideRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;




