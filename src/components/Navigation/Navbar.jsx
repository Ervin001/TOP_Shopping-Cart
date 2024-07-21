import NavStyles from './Navbar.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/' className={NavStyles.anchor}>
            Home
          </Link>
        </li>
        <li
          className={`${NavStyles['list-item']} ${
            activeLink === 'favorites' ? NavStyles['list-item-active'] : ''
          }`}
          onClick={() => setActiveLink('favorites')}
        >
          <Link to='favorites' className={NavStyles.anchor}>
            Favorites
          </Link>
        </li>
        <li
          className={`${NavStyles['list-item']} ${
            activeLink === 'cart' ? NavStyles['list-item-active'] : ''
          }`}
          onClick={() => setActiveLink('cart')}
        >
          <Link to='cart' className={NavStyles.anchor}>
            <ion-icon
              name='bag'
              className={`${NavStyles['ion-icon']}`}
            ></ion-icon>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
