import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { deleteContact } from "../../redux/contactsSlice";
import "./ContactList.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  // Фільтрування контактів на ім'я
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="contact-list">
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
