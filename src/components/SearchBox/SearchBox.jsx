// import { Formik, Field, Form } from "formik";
// import css from "./SearchBox.module.css";

// function SearchBox() {
//   return (
//     <Formik
//       initialValues={{ name: "" }}
//       onSubmit={(values, actions) => {
//         console.log(values);
//         localStorage.setItem("name", JSON.stringify(values));
//         actions.resetForm();
//       }}
//     >
//       <Form className={css.form}>
//         <label htmlFor="name" className={css.label}>
//           Find contacts by name
//         </label>
//         <Field name="name" className={css.field} />
//         {/* <button type="submit" className={css.formBtn} >Send</button> */}
//       </Form>
//     </Formik>
//   );
// }

// export default SearchBox;

import css from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={css.form}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={css.field}
      />
    </div>
  );
}

export default SearchBox;
