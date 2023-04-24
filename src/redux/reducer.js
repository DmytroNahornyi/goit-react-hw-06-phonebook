import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filter';

export const reducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
});
