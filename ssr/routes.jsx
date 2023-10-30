const { ROUTES } = require('../src/routes/paths.ts');

const React = require('react');
const { json, useLoaderData } = require('react-router-dom');

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={ROUTES.financialPlanner} /> },
      { path: ROUTES.financialPlanner, element: <FinancialPlanner /> },
      { path: ROUTES.newTable, element: <NewTable /> },
      { path: ROUTES.shedule, element: <Shedule /> },
      { path: ROUTES.profile, element: <Profile /> },
      { path: ROUTES.account, element: <Account /> },
      { path: ROUTES.todoList, element: <TodoList /> }
    ]
  },
  { path: ROUTES.logout, element: <LogOut /> },
  { path: ROUTES.logIn, element: <SignIn /> },
  { path: ROUTES.register, element: <SignOut /> },
  { path: '*', element: <Navigate to={ROUTES.page404} /> },
  { path: ROUTES.page404, element: <Page404 /> }
];

module.exports = routes;
