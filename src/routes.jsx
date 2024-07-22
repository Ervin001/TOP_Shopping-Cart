// src/routes.js
import App from './components/App/App';
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';
import ErrorPage from './components/ErrorPage/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;