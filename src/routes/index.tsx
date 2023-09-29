import React, { FC } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Account from '../containers/Account';
import FinancialPlanner from '../containers/FinancialPlanner';
import LogOut from '../containers/LogOut';
import NewTable from '../containers/NewTable';
import Profile from '../containers/Profile';
import Shedule from '../containers/Shedule';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignUp';
import { Layout } from '../layout';
import { ROUTES } from './paths';
import Page404 from 'containers/Page404';

interface IRoutesProps {
  [key: string]: unknown;
}

const Routes: FC<IRoutesProps> = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={ROUTES.financialPlanner} /> },
        { path: ROUTES.financialPlanner, element: <FinancialPlanner /> },
        { path: ROUTES.newTable, element: <NewTable /> },
        { path: ROUTES.shedule, element: <Shedule /> },
        { path: ROUTES.profile, element: <Profile /> },
        { path: ROUTES.account, element: <Account /> }
      ]
    },
    { path: ROUTES.logout, element: <LogOut /> },
    { path: ROUTES.logIn, element: <SignIn /> },
    { path: ROUTES.register, element: <SignOut /> },
    { path: '*', element: <Navigate to="/404" /> },
    { path: '404', element: <Page404 /> }
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
