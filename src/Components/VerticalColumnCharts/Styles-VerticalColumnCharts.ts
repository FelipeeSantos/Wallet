import styled from "styled-components";

interface ILegend {
  color: string
}

export const SideLeft = styled.div`
  background-color: ${props => props.theme.color.tertiary};
  border-radius: 0.7rem;
  padding: 2rem 2rem;
  width: 48%;
  
  @media(max-width: 770px) {
    height: 30rem;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const SideLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    
    > h2 {
      margin-bottom: 1rem;
    }
  }
`;

export const SideRightDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    
    > h2 {
      margin-bottom: 1rem;
    }
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
