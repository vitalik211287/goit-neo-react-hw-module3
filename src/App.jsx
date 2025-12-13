import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contacts from './contacts.json'
// import css from './App.css'
import "./App.css";

// console.log(contacts);

function App() {
  return (
    <div className='main'>
      <h1 className="mainText">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
