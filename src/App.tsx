import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Template from './Pages';
import Visiting from './Pages/Visiting';

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
          </>
        ),
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
