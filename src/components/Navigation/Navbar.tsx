import React from 'react';
import { StyledUList, StyledList, StyledAnchor } from './NavbarStyles';

function Navbar() {
  return (
    <nav>
      <StyledUList>
        <StyledList>
          <StyledAnchor href='/'>Home</StyledAnchor>
        </StyledList>
        <StyledList>
          <StyledAnchor href='/favorites'>favorites</StyledAnchor>
        </StyledList>
        <StyledList>
          <StyledAnchor href='/cart' $cart>
            Cart
          </StyledAnchor>
        </StyledList>
      </StyledUList>
    </nav>
  );
}

export default Navbar;
