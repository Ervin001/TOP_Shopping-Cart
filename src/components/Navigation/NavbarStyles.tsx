import styled from 'styled-components';

export const StyledUList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

export const StyledList = styled.li`
  font-size: 2.4rem;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
`;
interface StyledAnchorProp {
  $cart?: boolean;
}

export const StyledAnchor = styled.a<StyledAnchorProp>`
  color: ${(props) => (props.$cart ? '#EC4E20' : 'black')};
  text-decoration: none;

  &:hover {
    color: red;
  }
  &:link {
    color: ;
  }
`;
