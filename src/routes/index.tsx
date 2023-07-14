import React, { FC } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import FinancialPlanner from '../containers/FinancialPlanner';
import NewTable from '../containers/NewTable';
import Shedule from '../containers/Shedule';
import { Layout } from '../layout';
import { ROUTES } from './paths';

interface IRoutesProps {
  [key: string]: unknown;
}

const Routes: FC<IRoutesProps> = () => {
  const router = createBrowserRouter([
    {
      path: '/*',
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={ROUTES.financialPlanner} /> },
        { path: ROUTES.financialPlanner, element: <FinancialPlanner /> },
        { path: ROUTES.newTable, element: <NewTable /> },
        { path: ROUTES.shedule, element: <Shedule /> },
      ],
    },
    { path: '*', element: 'Not Found Page' },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
