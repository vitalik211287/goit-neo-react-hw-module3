import Contact from "../Contact/Contact";
import css from './ContactList.module.css'




function ContactList({ contacts, onAddContact }) {
  const deleteContact = (id) => {
    onAddContact((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
// onAddContact(contacts.filter((contact) => contact.id !== id));