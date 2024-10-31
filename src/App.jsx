import "./App.css";
import "modern-normalize/modern-normalize.css";
import { useState } from "react";
import contacts from "./assets/contacts.json";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [contact, setContact] = useState(contacts);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
