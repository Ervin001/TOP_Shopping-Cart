import cartLogo from '../../assets/icons/cart-outline.svg';
import NavStyles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={NavStyles['nav-container']}>
      <ul className={NavStyles['unordered-list']}>
        <li
          className={`${NavStyles['list-items']} ${NavStyles['center-item']}`}
        >
          <a className={NavStyles.links} href='/'>
            Home
          </a>
        </li>
        <li
          className={`${NavStyles['center-item']} ${NavStyles['list-items']} ${NavStyles['active-link']}`}
        >
          <a className={NavStyles.links} href='/favorites'>
            Favorites
          </a>
        </li>
        <li
          className={`${NavStyles['list-items']} ${NavStyles['center-item']} ${NavStyles['active-link']}`}
        >
          <a className={NavStyles['cart-link']} href='/cart'>
            <img src={cartLogo} alt='Cart' className={NavStyles['cart-icon']} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
