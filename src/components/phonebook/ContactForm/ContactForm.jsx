import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form, Input, Button } from '../Phonebook.styled';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact);

  const handleInputChange = (value, name) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return toast.info(`${name} is already in contacts`);
    } else if (
      contacts.find(el => el.number.toLowerCase() === number.toLowerCase())
    ) {
      return toast.info(`${number} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => {
            handleInputChange(e.target.value, e.target.name);
          }}
          required
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={e => {
            handleInputChange(e.target.value, e.target.name);
          }}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

// ContactForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   handleInputChange: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;
