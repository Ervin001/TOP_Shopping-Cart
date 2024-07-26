import Navbar from '../Navigation/Navbar';
import NavStyles from './App.module.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartValue={cart} />
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </>
  );
}

export default App;
