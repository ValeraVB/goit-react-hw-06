import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";
import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContartList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
