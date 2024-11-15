import Navbar from '../Navigation/Navbar';
import NavStyles from './App.module.css';
import { Outlet } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';

// Create a ThemeContext with default values
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  const [cart, setCart] = useState([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar cartValue={cart} />
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
