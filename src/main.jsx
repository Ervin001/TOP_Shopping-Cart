import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App/App';
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';
import ErrorPage from './components/ErrorPage/ErrorPage';

import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'favorites',
    element: <Favorites />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
