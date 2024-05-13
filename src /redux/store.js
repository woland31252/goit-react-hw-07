import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import contactsReducer from "../redux/contactsSlice";
import filtersReducer from "../redux/filtersSlice";

// const persistConfig = {
//   key: "contacts",
//   storage,
// };


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

