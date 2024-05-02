import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

const routes = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Login /> },
      { path: 'home', element: <Home /> },
    ],
  },
]);

export default routes;
