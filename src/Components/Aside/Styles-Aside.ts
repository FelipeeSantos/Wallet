import styled, { css } from "styled-components";

interface IAsideBar {
  menuIsOpen: boolean;
}

interface IThemeToggleFooter {
  menuIsOpen: boolean;
}

export const AsideBar = styled.aside<IAsideBar>`
  background-color: ${props => props.theme.color.secondary};
  border-right: 0.1rem solid ${props => props.theme.color.gray};
  color: ${props => props.theme.color.white};
  grid-area: Aside;
  padding-left: 2rem;
  position: relative;
  
  @media(max-width: 600px) {
    height: ${props => props.menuIsOpen ? "100vh" : "7rem"};
    overflow: hidden;
    padding-left: 0.7rem;
    position: fixed;
    z-index: 2;
    
    ${props => !props.menuIsOpen && css `
      border: none;
      border-bottom: 0.1rem solid ${props => props.theme.color.gray};
    `};
  }
`;

export const Logo = styled.div`
  align-items: center;
  display: flex;
  height: 7rem;
  
  img {
    height: 4rem;
    width: 4rem;
    
    @media(max-width: 600px) {
      display: none;
      height: 2.5rem;
      width: 2.5rem;
    }
  }
  
  h3 {
    font-size: 1.6rem;
    margin-left: 1rem;
    
    @media(max-width: 600px) {
      display: none;
    }
  }
  
  @media(max-width: 600px) {
    width: 20rem;
  }
`;

export const ToggleMenu = styled.button`
  background-color: ${props => props.theme.color.warning};
  border-radius: 0.5rem;
  display: none;
  font-size: 2.2rem;
  height: 4rem;
  transition: opacity .3s;
  width: 4rem;
  
  &:hover {
    opacity: 0.7;
  }
  
  @media(max-width: 600px) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const NavigationItemLink = styled.a`
  align-items: center;
  color: ${props => props.theme.color.information};
  display: flex;
  font-size: 1.6rem;
  margin: 0.7rem 0;
  text-decoration: none;
  transition: opacity .3s;
  
  &:hover {
    opacity: 0.7;
  }
  
  h4 {
    font-size: 1.2rem;
    margin: 0 0 0 0.5rem;
  }
  
  > svg {
    font-size: 1.6rem;
  }
`;

export const NavigationItemButton = styled.button`
  align-items: center;
  background: none;
  color: ${props => props.theme.color.information};
  display: flex;
  font-size: 1.6rem;
  margin: 0.7rem 0;
  transition: opacity .3s;
  
  &:hover {
    opacity: 0.7;
  }
  
  h4 {
    font-size: 1.2rem;
    margin: 0 0 0 0.5rem;
  }
  
  > svg {
    font-size: 1.6rem;
  }
`;

export const ThemeToggleFooter = styled.div<IThemeToggleFooter>`
  bottom: 3rem;
  display: none;
  position: absolute;
  
  @media(max-width: 470px) {
    display: ${props => props.menuIsOpen ? "flex" : "none"};
  }
`;
