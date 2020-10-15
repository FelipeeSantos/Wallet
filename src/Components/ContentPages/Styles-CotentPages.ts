import styled from "styled-components";

interface ITitle {
  lineColor: string;
}

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  width: 100%;
`;

export const Title = styled.div<ITitle>`
  
  > h4 {
    font-size: 2.6rem;
    
    &::after {
      border-bottom: 1rem solid ${props => props.lineColor};
      content: "";
      display: block;
      width: 4rem;
    }
  }
`;

export const Dates = styled.div`
  display: flex;
`;
