import { useSelector } from 'react-redux';
import { selectContacts, selectFilters } from '../../redux/selectors';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilters);

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <ul className={css.contList}>
            {filteredContacts.map((cont) => (<li key={cont.id} className={css.contItem}><Contact contItem={cont}/></li>))}
        </ul>
    )
}