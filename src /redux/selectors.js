

const selectLoading = state => state.contacts.loading;
const selectError = state => state.contacts.error;
const selectFilters = state => state.filters.name;
const selectContacts = (state) => state.contacts.items;

// export const selectFilteredContacts = (state) => {
//     const contacts = state.contacts.items;
//     const filter = state.filters.name;
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
// }

export { selectLoading, selectError, selectFilters, selectContacts };