
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectError } from '../../redux/contactsSlice.js';
import FetchError from '../FetchError/FetchError.jsx';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import Loader from '../Loader/Loader.jsx';
import css from './App.module.css'

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div className={css.container}>
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader/>}
      {isError ? <FetchError /> : <SearchBox />}
      <ContactList/>
    </div>
  )
}

export default App
