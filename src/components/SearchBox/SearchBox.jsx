import { Formik, Field, Form } from "formik";
import css from "./SearchBox.module.css";

function SearchBox() {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values) => console.log(values)}
    >
          <Form className={ css.form}>
              <label htmlFor="name" className={ css.label}>Find contacts by name</label>
        <Field name="name" className={css.field} />
        {/* <button type="submit" className={css.formBtn} >Send</button> */}
      </Form>
    </Formik>
  );
}

export default SearchBox;
