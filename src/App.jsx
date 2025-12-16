import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./contacts.json";
import { useState } from "react";
import "./App.css";

// console.log(contacts);

function App() {
  const [filter, setFilter] = useState("");

  const normalizedFilter = filter.toLowerCase().trim();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className="main">
      <h1 className="mainText">Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
