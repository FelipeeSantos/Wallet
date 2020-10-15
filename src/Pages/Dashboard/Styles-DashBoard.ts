import styled from "styled-components";

export const ContainerResultsWalletBox = styled.section`
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;

export const VerticalColumnChartsSection = styled.section`
  color: ${props => props.theme.color.white};
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  min-height: 26rem;
  width: 100%;
  
  @media(max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;
