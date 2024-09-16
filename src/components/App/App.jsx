import Navbar from '../Navigation/Navbar';
import NavStyles from './App.module.css';
import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';

// Create a ThemeContext with default values
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);

  // Corrected toggleTheme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // prevTheme === 'light' ? 'dark' : 'light';
      console.log(prevTheme);
    });
    console.log(theme);
  };

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
