import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    taste: 'с фуа-гра',
    serving: 10,
    mouse: 1,
    weight: '0,5',
    status: true,
    available: 2,
  },
  {
    id: 2,
    taste: 'с рыбой',
    serving: 40,
    mouse: 2,
    weight: '2',
    status: false,
    available: 0,
  },
  {
    id: 3,
    taste: 'с курой',
    serving: 100,
    mouse: 5,
    weight: '5',
    status: false,
    available: 2,
  },
];

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.forEach(function (item) {
        if (item.id === action.payload) {
          item.status = !item.status;
        }
      });
    },
  },
});

export const { changeStatus } = productSlice.actions;

export default productSlice.reducer;