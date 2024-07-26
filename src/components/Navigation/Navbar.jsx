import NavStyles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar({ cartValue }) {
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
              <ion-icon
                name='bag'
                className={`${NavStyles['ion-icon']}`}
              ></ion-icon>
              <span>{cartValue.length}</span>
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
