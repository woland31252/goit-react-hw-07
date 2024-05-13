import { createSlice, createSelector} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectContacts, selectFilters } from "./selectors.js";




const contactsInitState = {
  items: [],
  loading: false,
  error: null
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitState,
    extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters], (contacts, filters) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
})

export default contactsSlice.reducer;