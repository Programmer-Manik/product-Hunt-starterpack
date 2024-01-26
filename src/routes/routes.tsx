import App from '@/App';
import AddProduct from '@/pages/AddProduct/AddProduct';
// import About from '@/pages/About';
import Home from '@/pages/Home/Home';
// import Home from '@/pages/home';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;