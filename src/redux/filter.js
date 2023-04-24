import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

export const filter = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    getVisibleContact: (state, { payload }) => (state = payload),
  },
});

export const { getVisibleContact } = filter.actions;
export const filterReducer = filter.reducer;
