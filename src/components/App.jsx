import { ToastContainer } from 'react-toastify';
import ContactForm from './phonebook/ContactForm/ContactForm';
import ContactList from './phonebook/ContactList/ContactList';
import Filter from './phonebook/Filter/Filter';
import { useSelector } from 'react-redux';
import { AppContainer, Title } from './phonebook/Phonebook.styled';

export function App() {
  const contacts = useSelector(state => state.contact);

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />{' '}
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <ContactList />
          <ToastContainer />
        </>
      )}
    </AppContainer>
  );
}
