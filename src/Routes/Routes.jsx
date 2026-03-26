import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import About from '../pages/About/About';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/appData.json'),
        Component: Home
      },
      {
        path: '/app',
        loader: () => fetch('/appData.json'),
        Component: Apps
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('/appData.json'),
        Component: AppDetails
      }
    ]
  },
]);