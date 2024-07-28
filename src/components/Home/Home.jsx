import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Card from './Card/Card';
import NavStyles from './Home.module.css';

// api call hook
const useShoppingData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((products) => {
        // map over product and set unique ID
        const productWithUniqueId = products.map((product) => ({
          ...product,
          uniqueId: uuidv4(),
          quantity: 1,
        }));
        setData(productWithUniqueId);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

function Home() {
  const { data, error, loading } = useShoppingData();
  const [cart, setCart] = useOutletContext();

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error</h2>;

  // function adds items to cart
  const handleAddCart = (item) => {
    // setQuantity((prevQuantity) => prevQuantity + 1);
    setCart((prevCart) => {
      // check if item is in cart first
      const existingItem = prevCart.find(
        (cartItem) => cartItem.uniqueId === item.uniqueId
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.uniqueId === item.uniqueId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <ul className={`${NavStyles['unordered-list']} ${NavStyles['grid']}`}>
        {data.map((item) => (
          <li key={item.uniqueId} className={`${NavStyles['grid-item']}`}>
            <Card product={item} onAddToCart={() => handleAddCart(item)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
