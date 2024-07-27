import { useOutletContext } from 'react-router-dom';

import NavStyles from './Cart.module.css';
import Card from './../Home/Card/Card';

function Cart() {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <ul className={`${NavStyles['unordered-list']} ${NavStyles['grid']}`}>
        {cart.map((item) => (
          <li key={item.id} className={`${NavStyles['grid-item']}`}>
            <Card
              product={item}
              inCart={true}
              onAddToCart={() => handleAddCart(item)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
