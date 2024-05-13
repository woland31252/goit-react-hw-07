import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";




const contactsInitState = {
  items: [],
  loading: false,
  error: null
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
        return { payload: { name, number } };
          },
      },
    deleteContact(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => { state.loading = true; })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;