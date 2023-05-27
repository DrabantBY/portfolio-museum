import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Template from './Pages';
import Visiting from './Pages/Visiting';
import VirtualTour from './Pages/VirtualTour';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <Visiting />,
      },
      {
        path: '/tours/:name',
        element: <VirtualTour />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
