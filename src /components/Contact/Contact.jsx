import { useDispatch } from "react-redux";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps";
import css from './Contact.module.css';


export default function Contact({ contItem: {
        id,
        name,
        number
}}) {
    const dispatch = useDispatch();
    return (
        <>
            <div className={css.contact}>
                <p className={css.contactName}><BsFillPersonFill className={css.icon} />{name}</p>
                <a href="tel:{ number }" className={css.contactPhone}><BsFillTelephoneFill className={css.icon} />{number}</a>
            </div>
            <button type="button" className={css.btn} onClick={()=>dispatch(deleteContact(id))}>Delete</button>
        </>
    )
}