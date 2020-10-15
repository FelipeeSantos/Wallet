import styled from "styled-components";

export const HeaderBar = styled.header`
  align-items: center;
  background-color: ${props => props.theme.color.secondary};
  border-bottom: 0.1rem solid ${props => props.theme.color.gray};
  color: ${props => props.theme.color.white};
  display: flex;
  font-size: 1.6rem;
  justify-content: space-between;
  grid-area: Header;
  padding: 0 1rem;
`;

export const Profile = styled.div`
  
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
