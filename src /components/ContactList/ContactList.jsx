import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts)
    
    return (
        <ul className={css.contList}>
            {filteredContacts.map((cont) => (<li key={cont.id} className={css.contItem}><Contact contItem={cont}/></li>))}
        </ul>
    )
}