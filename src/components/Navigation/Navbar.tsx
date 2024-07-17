import React from 'react';
import {
  StyledNav,
  StyledUList,
  StyledList,
  StyledAnchor,
} from './NavbarStyles';

import cartLogo from '../../assets/icons/cart-outline.svg';

function Navbar() {
  return (
    <StyledNav>
      <StyledUList>
        <StyledList>
          <StyledAnchor href='/'>Home</StyledAnchor>
        </StyledList>
        <StyledList>
          <StyledAnchor href='/favorites'>favorites</StyledAnchor>
        </StyledList>
        <StyledList>
          <StyledAnchor href='/cart' $cart>
            <img src={cartLogo}></img>
          </StyledAnchor>
        </StyledList>
      </StyledUList>
    </StyledNav>
  );
}

export default Navbar;
