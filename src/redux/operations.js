import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/contactsApi';

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async contact => {
    const { id, name, phone } = contact;
    const response = await api.postContact(id, name, phone);

    console.log(response);
    return response;
  }
);
