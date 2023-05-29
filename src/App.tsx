import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Template from './Pages';
import Visiting from './Pages/Visiting';
import Explore from './Pages/Explore';
import Gallery from './Pages/Gallery';
import VirtualTour from './Pages/VirtualTour';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: (
          <>
            <Visiting />
            <Explore />
            <Gallery />
          </>
        ),
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
