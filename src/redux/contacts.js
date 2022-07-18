import { createSlice } from '@reduxjs/toolkit';
import { postContact, getContacts, deleteContact } from './operations';

const slice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], isLoading: false, error: null, filter: '' },
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [postContact.pending](state) {
      state.isLoading = true;
    },
    [postContact.fulfilled](state) {
      state.isLoading = false;
    },
    [postContact.rejected](state, { error }) {
      return { ...state, error: error, isLoading: false };
    },
    [getContacts.fulfilled](state, { payload }) {
      return { ...state, contacts: payload, isLoading: false };
    },
    [getContacts.rejected](state, { error }) {
      return { ...state, error: error, isLoading: false };
    },
    [deleteContact.pending](state) {
      return { ...state, isLoading: true };
    },
    [deleteContact.fulfilled](state) {
      return { ...state, isLoading: false };
    },
    [deleteContact.rejected](state, { error }) {
      return { ...state, error: error, isLoading: false };
    },
  },
});

export const { addFilter } = slice.actions;

export const contacts = slice.reducer;
