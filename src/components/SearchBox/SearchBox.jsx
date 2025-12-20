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
