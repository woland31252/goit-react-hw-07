

const selectLoading = state => state.contacts.loading;
const selectError = state => state.contacts.error;
const selectFilters = state => state.filters.name;
const selectContacts = (state) => state.contacts.items;


export { selectLoading, selectError, selectFilters, selectContacts };