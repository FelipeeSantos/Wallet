import styled, {keyframes} from "styled-components";

interface ITag {
  color: string;
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

export const CardContainer = styled.div`
  animation: ${animate} .5s ease;
  background-color: ${props => props.theme.color.tertiary};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  margin: 1rem 0;
  padding: 1.2rem 1rem;
  position: relative;
  transition: all .3s;
  
  &:hover {
    opacity: .8;
    transform: translateX(1rem);
  }
  
  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  
  span {
    font-size: 2rem;
    font-weight: 700;
    margin-left: 0.5rem;
  }
  
  small {
    display: block;
    font-size: 1.2rem;
    margin-left: 0.5rem;
    text-align: left;
  } 
`;

export const Tag = styled.div<ITag>`
  background-color: ${props => props.color};
  height: 60%;
  left: 0;
  position: absolute;
  width: 1rem;
`;
