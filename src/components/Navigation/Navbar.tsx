import React from 'react';
import { StyledUList, StyledList } from './NavbarStyles';

function Navbar() {
  return (
    <nav>
      <StyledUList>
        <StyledList>Home</StyledList>
        <StyledList>Shop</StyledList>
        <StyledList $cart>Cart</StyledList>
      </StyledUList>
    </nav>
  );
}

export default Navbar;
