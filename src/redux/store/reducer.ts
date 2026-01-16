import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import counterSlice from '../slices/counterSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  counter: counterSlice,
});

export default rootReducer;
