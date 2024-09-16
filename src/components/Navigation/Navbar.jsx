import NavStyles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../App/App';

function Navbar({ cartValue }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Get cart items, even when more than one item is added
  const cartItemsNum = cartValue.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={NavStyles['nav-container']}>
      <ul className={NavStyles['unordered-list']}>
        <li className={NavStyles['list-item']}>
          <div className={NavStyles.spacer}>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                `${
                  isActive
                    ? NavStyles.active
                    : isPending
                    ? NavStyles.pending
                    : ''
                } ${NavStyles.link} ${NavStyles['link-padding']}`
              }
            >
              Home
            </NavLink>
          </div>
        </li>
        <li className={NavStyles['list-item']}>
          <div className={NavStyles.spacer}>
            <NavLink
              to='favorites'
              className={({ isActive, isPending }) =>
                `${
                  isActive
                    ? NavStyles.active
                    : isPending
                    ? NavStyles.pending
                    : ''
                } ${NavStyles.link} ${NavStyles['link-padding']}`
              }
            >
              Favorites
            </NavLink>
          </div>
        </li>
        {/* theme */}
        <li className={NavStyles['list-item']}>
          <div className={NavStyles.spacer}>
            <button onClick={toggleTheme}>{theme}</button>
          </div>
        </li>
        <li className={NavStyles['list-item']}>
          <div className={NavStyles.spacer}>
            <NavLink
              to='cart'
              className={({ isActive, isPending }) =>
                `${
                  isActive
                    ? NavStyles.active
                    : isPending
                    ? NavStyles.pending
                    : ''
                } ${NavStyles.link} ${NavStyles['cart-link-padding']}`
              }
            >
              <div className={`${NavStyles['icon-wrapper']}`}>
                <ion-icon
                  name='bag'
                  className={`${NavStyles['ion-icon']}`}
                ></ion-icon>
                <span className={`${NavStyles['cart-item-size']}`}>
                  {cartItemsNum}
                </span>
              </div>
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
