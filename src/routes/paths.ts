const path = (parent: string, child?: string): string => {
  return `/${parent || ''}` + (child ? `/${child}` : '');
};

const ROUTES = {
  newTable: 'new-table',
  shedule: 'shedule',
  financialPlanner: 'planner',
  account: 'account',
  profile: 'profile',
  logout: 'logout',
  logIn: 'log-in',
  register: 'register',
  page404: '404',
  todoList: 'todo-list'
};

export type ROUTESKeys = keyof typeof ROUTES;
export type ROUTESValues = (typeof ROUTES)[ROUTESKeys];

const ROUTES_NAVIGATE = {
  newTable: path(ROUTES.newTable),
  shedule: path(ROUTES.shedule),
  financialPlanner: path(ROUTES.financialPlanner),
  account: path(ROUTES.account),
  profile: path(ROUTES.profile),
  logout: path(ROUTES.logout),
  logIn: path(ROUTES.logIn),
  register: path(ROUTES.register),
  page404: path(ROUTES.page404),
  todoList: path(ROUTES.todoList)
};

export { ROUTES, ROUTES_NAVIGATE };
