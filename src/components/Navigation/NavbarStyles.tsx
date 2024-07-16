import styled from 'styled-components';

export const StyledUList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

interface StyledListProps {
  $cart?: boolean;
}

export const StyledList = styled.li<StyledListProps>`
  color: ${(props) => (props.$cart ? 'green' : 'black')};
  font-size: 2.4rem;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
`;
