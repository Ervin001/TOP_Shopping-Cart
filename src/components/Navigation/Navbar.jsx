import NavStyles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={NavStyles['nav-container']}>
      <ul className={NavStyles['unordered-list']}>
        <li className={NavStyles['list-item']}>
          <a href='/home' className={NavStyles.anchor}>
            Home
          </a>
        </li>
        <li className={NavStyles['list-item']}>
          <a href='/favorites' className={NavStyles.anchor}>
            Favorites
          </a>
        </li>
        <li className={NavStyles['list-item']}>
          <div className='spacer'></div>
          <a href='/shopping-cart' className={NavStyles.anchor}>
            <ion-icon name='bag'></ion-icon>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
