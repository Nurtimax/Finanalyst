import { configureStore } from '@reduxjs/toolkit';
import price from './price';
import shedule from './shedule';
import columns from './columns';
import financial from './financial-planner';

export const store = configureStore({
  reducer: {
    price,
    shedule,
    columns,
    financial,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
