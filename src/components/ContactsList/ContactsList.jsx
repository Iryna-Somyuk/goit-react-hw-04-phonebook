import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { ListContacts } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          userId={id}
          contactName={name}
          contactNumber={number}
          onDelete={onDelete}
        />
      ))}
    </ListContacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
