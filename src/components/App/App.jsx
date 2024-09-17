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
/**
 * TODO: Fix the following bug: When User leaves page and adds the same items to the cart, that item is added to the array. The problem is in the Home.jsx file in the useEffect hook. Started to fix by passing the cart state into the use effect and checking any changes that happen to it. This did not work as intended, instead only the cart array once in the Navbar is updated.
 */
