import { createSlice } from '@reduxjs/toolkit';
import { postContact } from './operations';

const slice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], isLoading: false, error: null, filter: '' },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },

    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        ({ name }) => name !== action.payload
      );
    },
  },
  extraReducers: {
    [postContact.pending]: state => (state.isLoading = true),
    [postContact.fulfilled](state, { payload }) {
      return { ...state, contacts: [...state.contacts, payload] };
    },
    [postContact.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const { addContact, addFilter, deleteContacts } = slice.actions;

export const contacts = slice.reducer;
