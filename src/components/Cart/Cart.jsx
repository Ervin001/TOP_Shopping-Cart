import { useOutletContext } from 'react-router-dom';

import NavStyles from './Cart.module.css';
import Card from './../Home/Card/Card';
import { useState } from 'react';

function Cart() {
  const [cart, setCart] = useOutletContext();

  const removeFromCart = (uniqueItemId) => {
    setCart((prevCart) => {
      // check item in the cart
      const item = prevCart.find(
        (cartItem) => cartItem.uniqueId === uniqueItemId
      );
      if (item.quantity === 1) {
        return prevCart.filter(
          (cartItem) => cartItem.uniqueId !== uniqueItemId
        );
      } else {
        return prevCart.map((cartItem) =>
          cartItem.uniqueId === uniqueItemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  return (
    <>
      <ul className={`${NavStyles['unordered-list']} ${NavStyles['grid']}`}>
        {cart.map((item) => (
          <li key={item.uniqueId} className={`${NavStyles['grid-item']}`}>
            <Card
              product={item}
              inCart={true}
              onRemoveFromCart={() => removeFromCart(item.uniqueId)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
