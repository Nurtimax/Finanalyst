import React, { FC } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { ROUTES } from 'routes/paths';
import { NavLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import _ from 'lodash';

interface IBreadcrumbsProps {
  [key: string]: unknown;
}

const Breadcrumbs: FC<IBreadcrumbsProps> = ({}) => {
  const breadcrumbs = useReactRouterBreadcrumbs(
    [
      { path: ROUTES.account, breadcrumb: 'Account' },
      { path: ROUTES.financialPlanner, breadcrumb: 'Financial planner table' },
      { path: ROUTES.newTable, breadcrumb: 'New table' },
      { path: ROUTES.page404, breadcrumb: '' },
      { path: ROUTES.profile, breadcrumb: 'Profile' },
      { path: ROUTES.shedule, breadcrumb: 'Shedule' },
      { path: ROUTES.logIn, breadcrumb: 'Sign in' },
      { path: ROUTES.register, breadcrumb: 'Sign up' }
    ],
    {}
  );

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: '2rem' }}>
        {_.last(breadcrumbs)?.breadcrumb}
      </Typography>
      <MuiBreadcrumbs
        maxItems={3}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {_.map(breadcrumbs, ({ match, breadcrumb, key }) => (
          <NavLink key={key} to={match.pathname}>
            {breadcrumb}
          </NavLink>
        ))}
      </MuiBreadcrumbs>
    </>
  );
};

export default Breadcrumbs;
