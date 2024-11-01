import "./App.css";
import "modern-normalize/modern-normalize.css";
import { useState } from "react";
import contacts from "./assets/contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [contact, setContact] = useState(contacts);
  const [searchContact, setSearchContact] = useState("");
  const handleSearchContact = (e) => {
    setSearchContact(e.target.value);
  };
  const handleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox onChange={handleSearchContact} />
      <ContactList contacts={handleContacts} />
    </>
  );
};

export default App;
