
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { loading } from '../../redux/selectors.js';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import Loader from '../Loader/Loader.jsx';
import css from './App.module.css'

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div className={css.container}>
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader/>}
      <SearchBox />
      <ContactList/>
    </div>
  )
}

export default App
