import { useEffect, useState } from 'react';
import Card from './Card/Card';

const useShoppingData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

function Home() {
  const { data, error, loading } = useShoppingData();

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error</h2>;

  data.forEach((d) => console.log(JSON.stringify(d)));

  return (
    <>
      <h1>This is the Home</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Card product={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
