import { Formik, Form, Field } from "formik";
import css from './ContactForm.module.css'

function ContactForm() {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={(values, actions) => {console.log(values); actions.resetForm();}}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <Field id="name" name="name" type="text" className={css.field} />

        <label htmlFor="number" className={css.label}>
          Number
        </label>
        <Field id="number" name="number" type="tel" className={css.field} />

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm