import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

function ContactList({ contacts }) {
  console.log(contacts);
  return (
    <ul className={ css.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

export default ContactList;
