import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name);

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <ul className={css.contList}>
            {filteredContacts.map((cont) => (<li key={cont.id} className={css.contItem}><Contact contItem={cont}/></li>))}
        </ul>
    )
}