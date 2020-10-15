import styled from "styled-components";

export const FilterSection = styled.section`
  width: 100%;
  
  > div {
    display: flex;
    margin-bottom: 3rem;
    justify-content: center;
    width: 100%;
    
    > button {
      background: none;
      color: ${props => props.theme.color.white};
      font-size: 1.8rem;
      font-weight: 500;
      margin: 0 1rem;
      opacity: .4;
      transition: opacity .3s;
      
      &:hover  {
        opacity: .7;
      }
      
      &::after {
        border-bottom: 1rem solid ${props => props.theme.color.success};
        content: "";
        display: block;
        margin: 0 auto;
        width: 5.5rem;
      }
    }
  }
  
  .tag-filter-eventually {
    
    &::after {
      border-bottom: 1rem solid ${props => props.theme.color.warning};
    }
  }
  
  .tag-activated {
    opacity: 1;
  }
`;
