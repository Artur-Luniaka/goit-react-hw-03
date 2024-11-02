import "./App.css";
import "modern-normalize/modern-normalize.css";
import { useState } from "react";
import contacts from "./assets/contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  const [contact, setContact] = useState(contacts);
  const [searchContact, setSearchContact] = useState("");
  const handleSearchContact = (e) => {
    setSearchContact(e.target.value);
  };
  const handleContacts = contact.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );
  const handleSubmit = (values, actions) => {
    const contactWithId = { ...values, id: nanoid(5) };
    setContact([...contact, contactWithId]);
    actions.resetForm();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox onChange={handleSearchContact} />
      <ContactList contacts={handleContacts} />
    </>
  );
};

export default App;
