import NavStyles from './Navbar.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [numCartItems, setNumCartItems] = useState(0);

  return (
    <nav className={NavStyles['nav-container']}>
      <ul className={NavStyles['unordered-list']}>
        <li
          className={`${NavStyles['list-item']} ${
            activeLink === 'home' ? NavStyles['list-item-active'] : ''
          }`}
          onClick={() => setActiveLink('home')}
        >
          <NavLink
            to='/'
            className={({ isActive, isPending }) =>
              isActive ? NavStyles.active : isPending ? NavStyles.pending : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li
          className={`${NavStyles['list-item']} ${
            activeLink === 'favorites' ? NavStyles['list-item-active'] : ''
          }`}
          onClick={() => setActiveLink('favorites')}
        >
          <NavLink
            to='favorites'
            className={({ isActive, isPending }) =>
              isActive ? NavStyles.active : isPending ? NavStyles.pending : ''
            }
          >
            Favorites
          </NavLink>
        </li>
        <li
          className={`${NavStyles['list-item']} ${
            activeLink === 'cart' ? NavStyles['list-item-active'] : ''
          }`}
          onClick={() => setActiveLink('cart')}
        >
          <NavLink
            to='cart'
            className={({ isActive, isPending }) =>
              isActive ? NavStyles.active : isPending ? NavStyles.pending : ''
            }
          >
            <ion-icon
              name='bag'
              className={`${NavStyles['ion-icon']}`}
            ></ion-icon>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
