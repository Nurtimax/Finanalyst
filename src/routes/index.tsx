import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

interface IRoutesProps {
  [key: string]: unknown;
}

const Routes: FC<IRoutesProps> = () => {
  const router = createBrowserRouter([
    { path: '/*', element: 'router' },
    { path: '*', element: 'Not Found Page' },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
