import { configureStore } from '@reduxjs/toolkit';
import productList from './productSlice';

export const store = configureStore({
  reducer: {
    productList,
  },
});
