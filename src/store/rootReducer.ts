import { Reducer, combineReducers } from '@reduxjs/toolkit';

import price from './slice/price';
import shedule from './slice/shedule';
import columns from './slice/columns';
import financial from './slice/financial-planner';
import auth from './slice/authentication';
import user from './slice/user';

export const rootReducer: Reducer = combineReducers({
  price,
  shedule,
  columns,
  financial,
  auth,
  user
});

export type TRootReducer = typeof rootReducer;
