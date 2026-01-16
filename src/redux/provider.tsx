'use client';

import { Provider } from 'react-redux';
import type { ReactNode } from 'react';
import { createAppStore } from './store/store';
import { createAxiosInstance } from './services/axios';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001/api';
const axiosInstance = createAxiosInstance(API_BASE_URL);

const store = createAppStore(axiosInstance);

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
