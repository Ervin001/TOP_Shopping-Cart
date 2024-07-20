import NavStyles from './Navbar.module.css';
import { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className={NavStyles['nav-container']}>
      <ul className={NavStyles['unordered-list']}>
        <li
          className={`${NavStyles['list-item']} ${
            activeLink === 'home' ? NavStyles['list-item-active'] : ''
          }`}
          onClick={() => setActiveLink('home')}
        >
          <a href='#' className={NavStyles.anchor}>
            Home
          </a>
        </li>
        <li
          className={`${NavStyles['list-item']} ${
            activeLink === 'favorites' ? NavStyles['list-item-active'] : ''
          }`}
          onClick={() => setActiveLink('favorites')}
        >
          <a href='#' className={NavStyles.anchor}>
            Favorites
          </a>
        </li>
        <li
          className={`${NavStyles['list-item']} ${
            activeLink === 'cart' ? NavStyles['list-item-active'] : ''
          }`}
          onClick={() => setActiveLink('cart')}
        >
          <a href='#' className={NavStyles.anchor}>
            <ion-icon
              name='bag'
              size='large'
              className={`${NavStyles['ion-icon']}`}
            ></ion-icon>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
