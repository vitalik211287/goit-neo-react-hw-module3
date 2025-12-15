import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./contacts.json";
import { useMemo, useState } from "react";
import "./App.css";

// console.log(contacts);

function App() {
  const [filter, setFilter] = useState("");
  const filteredContacts = useMemo(() => {
    const normalized = filter.toLowerCase().trim();
    return contacts.filter((c) => c.name.toLowerCase().includes(normalized));
  }, [filter]);

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
