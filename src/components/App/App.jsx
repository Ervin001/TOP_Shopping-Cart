import Navbar from '../Navigation/Navbar';
import { Outlet } from 'react-router-dom';
import NavStyles from './App.module.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
