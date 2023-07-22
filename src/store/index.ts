import { configureStore } from '@reduxjs/toolkit';
import price from './slice/price';
import shedule from './slice/shedule';
import columns from './slice/columns';
import financial from './slice/financial-planner';
import auth from './slice/authentication';

export const store = configureStore({
  reducer: {
    price,
    shedule,
    columns,
    financial,
    auth,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
