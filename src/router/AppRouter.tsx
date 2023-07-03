import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';

const AppRouter = () => {
  const router = createBrowserRouter([{ path: '/', element: <Home /> }]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
