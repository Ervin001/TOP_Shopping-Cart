import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  background-color: hsl(27, 73%, 59%);
  margin-top: 1rem;
  border-radius: 20px;
  over-flow: hidden;
  padding: 1rem;
`;

export const StyledUList = styled.ul`
  display: flex;
  flex-grow: 1;
  gap: 1rem;
  list-style: none;
`;

export const StyledList = styled.li`
  font-size: 2.4rem;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  border-radius: 20px;
  padding: 0.2rem 1rem;

  &:hover {
    background-color: hsl(19, 85%, 43%);
  }

  &:last-child {
    margin-left: auto;
  }
`;

export const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: white;
  // color: ${(props) => (props.$cart ? '#EC4E20' : 'black')};
  text-decoration: none;
  justify-self: flex-end;

  &:link {
    color: ;
  }
`;
