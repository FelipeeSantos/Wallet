import styled from "styled-components";

export const SignInContainer = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color.primary};
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
  
  > img { 
    height: 4rem;
    width: 4rem;
  }
  
  > h3 {
    color: ${props => props.theme.color.white};
    font-size: 1.6rem;
    margin-left: 0.7rem;
  }
`;

export const Form = styled.form`
  background-color: ${props => props.theme.color.tertiary};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  height: 30rem;
  padding: 3rem;
  width: 30rem;
`;

export const FormTitle = styled.h1`
  color: ${props => props.theme.color.white};
  margin-bottom: 2rem;
  
  &::after {
    border-bottom: 1rem solid ${props => props.theme.color.warning};
    content: "";
    display: block;
    margin: 0.2rem 0 1rem 0;
    width: 3.5rem;
  }
`;

export const Input = styled.input`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  border-radius: 0.5rem;
  margin: 0.7rem 0;
  padding: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.color.warning};
  border-radius: 0.5rem;
  color: ${props => props.theme.color.white};
  font-weight: bold;
  margin-top: 3.5rem;
  padding: 1rem;
  transition: opacity .3s;
  width: 100%;
  
  &:hover {
    opacity: .9;
  }
`;
