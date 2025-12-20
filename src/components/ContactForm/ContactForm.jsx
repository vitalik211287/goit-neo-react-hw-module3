import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(50).required(),
  number: yup.string().min(3).max(50).required(),
});

function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const newContact = { ...values, id: nanoid() };
        onAddContact((prev) => [...prev, newContact]);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <Field
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className={css.field}
        />
        <ErrorMessage component="span" name="name" className={css.error} />

        <label htmlFor="number" className={css.label}>
          Number
        </label>
        <Field
          id="number"
          name="number"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={css.field}
        />
        <ErrorMessage component="span" name="number" className={css.error} />

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
