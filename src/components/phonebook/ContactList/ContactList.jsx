import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';

// import PropTypes from 'prop-types';
import { ListItem, Button, List } from './ContactList.styled';

// function ContactItem({ contact, onDeleteContact }) {
//   return (
//     <ListItem>
//       {contact.name} {contact.number}
//       <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
//     </ListItem>
//   );
// }

function ContactList() {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <p>
              {name}: {number}
            </p>
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              {' '}
              Delete{' '}
            </Button>
          </ListItem>
        );
      })}
        {/* <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        /> */}
    </List>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
