import { ROUTES } from '../../routes/paths';

export const SETTINGS = {
  logined: [
    { id: 1, name: 'Profile', path: ROUTES.profile },
    { id: 2, name: 'Account', path: ROUTES.account },
    { id: 3, name: 'Logout', path: ROUTES.logout },
  ],
  login: [
    { id: 1, name: 'Sign Up', path: ROUTES.register },
    { id: 2, name: 'Sign In', path: ROUTES.logIn },
  ],
};
