import { createSlice, nanoid } from "@reduxjs/toolkit";

import contactsJson from '../components/contacts.json';




const contactsInitState = {
    items: contactsJson,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitState,
  reducers: {
        addContact: {
        reducer (state, action) {
        state.items.push(action.payload);
    },
        prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
          },
      },
    deleteContact(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;