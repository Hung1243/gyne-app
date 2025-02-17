import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './features/profileSlice';

export const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
