import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './Pages';
import Visiting from './Pages/Visiting';
import Explore from './Pages/Explore';
import Gallery from './Pages/Gallery';
import VirtualTour from './Pages/VirtualTour';
import Parallax from './Components/UI/Parallax';
import Contacts from './Pages/Contacts';
import Tickets from './Pages/Tickets';

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
            <Tickets />
            <Parallax />
            <Contacts />
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
