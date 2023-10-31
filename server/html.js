import React from 'react';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider
} from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';

import createFetchRequest from './request';
import { ROUTES } from '../src/routes/paths.ts';
import { Layout } from '../src/layout/index.ts';
import FinancialPlanner from '../src/containers/FinancialPlanner.tsx';
import NewTable from '../src/containers/NewTable.tsx';
import Shedule from '../src/containers/Shedule.tsx';
import Profile from '../src/containers/Profile.tsx';
import Account from '../src/containers/Account.tsx';
import LogOut from '../src/containers/LogOut.tsx';
import SignIn from '../src/containers/SignIn.tsx';
import SignOut from '../src/containers/SignUp.tsx';
import TodoList from '../src/containers/TodoList.tsx';
import Page404 from '../src/containers/Page404.tsx';

const routes = [
  {
    path: '/',
    element: Layout,
    children: [
      { index: true, element: <Navigate to={ROUTES.financialPlanner} /> },
      { path: ROUTES.financialPlanner, element: FinancialPlanner },
      { path: ROUTES.newTable, element: NewTable },
      { path: ROUTES.shedule, element: Shedule },
      { path: ROUTES.profile, element: Profile },
      { path: ROUTES.account, element: Account },
      { path: ROUTES.todoList, element: TodoList }
    ]
  },
  { path: ROUTES.logout, element: LogOut },
  { path: ROUTES.logIn, element: SignIn },
  { path: ROUTES.register, element: SignOut },
  { path: '*', element: <Navigate to={ROUTES.page404} /> },
  { path: ROUTES.page404, element: Page404 }
];

export async function renderHtml(req) {
  let { query, dataRoutes } = createStaticHandler(routes);
  let fetchRequest = createFetchRequest(req);
  let context = await query(fetchRequest);

  // If we got a redirect response, short circuit and let our Express server
  // handle that directly
  if (context instanceof Response) {
    throw context;
  }

  let router = createStaticRouter(dataRoutes, context);
  return renderToString(
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Theme>
              <HelmetProvider>
                <StaticRouterProvider router={router} context={context} />
              </HelmetProvider>
            </Theme>
          </LocalizationProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
