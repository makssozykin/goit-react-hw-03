import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <li key={contact.id} className={css['contact-item']}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
