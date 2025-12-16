import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ id: nanoid(), name: "", number: "" }}
      onSubmit={(values, actions) => {
        onAddContact((prev) => [...prev, values]);
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

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
