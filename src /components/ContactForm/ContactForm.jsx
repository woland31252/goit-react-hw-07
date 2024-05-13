import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useId } from "react";
import * as Yup from "yup";
import { addContact } from '../../redux/contactsOps.js';
import clsx from 'clsx';
import css from './ContactForm.module.css';


export default function ContactForm() {
const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch()


  const initValue = {
            name: "",
            number: ""
        }

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm();
}

  return (
      <Formik
          initialValues={initValue}
          onSubmit={handleSubmit}
          validationSchema={ContactSchema}>
          
          <Form className={ css.form}>
                <label className={css.formLable} htmlFor={nameId}>Name</label>
              <Field className={css.formInput} type="text" name="name" id={nameId} />
              <ErrorMessage className={clsx(css.formValid, css.formName)} name="name" component="span" />
                <label className={css.formLable} htmlFor={numberId}>Number</label>
              <Field className={css.formInput} type="text" name="number" id={numberId} />
        <ErrorMessage className={clsx(css.formValid, css.formNum)} name="number" component="span" />
				<button className={css.formBtn} type="submit">Add Contact</button>
			</Form>
        </Formik>
    )
}
