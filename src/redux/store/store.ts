import { configureStore } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import authReducer from '../slices/authSlice';
import counterSlice from '../slices/counterSlice';

export const createAppStore = (axiosInstance: AxiosInstance) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            axios: axiosInstance,
          },
        },
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof createAppStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
