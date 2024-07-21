import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/taskSlice';
import type { TaskState } from './features/taskSlice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export type RootState = {
  task: TaskState;
};
export type AppDispatch = typeof store.dispatch;
