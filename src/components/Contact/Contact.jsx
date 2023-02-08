import PropTypes from 'prop-types';
import { ContactItem, ContactInfo, DeleteBtn } from './Contact.styled';

export const Contact = ({ userId, contactName, contactNumber, onDelete }) => {
  return (
    <ContactItem key={userId}>
      <ContactInfo>
        {contactName}: {contactNumber}
      </ContactInfo>
      <DeleteBtn onClick={() => onDelete(userId)}>Delete</DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  userId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
