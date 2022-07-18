import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import style from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

export function App() {
  const isLoading = useSelector(state => state.phonebook.isLoading);

  return (
    <>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <div className={style.filteredContacts}>
        <h2 className={style.contactsTitle}>Contacts</h2>
        <Filter />
        {isLoading ? (
          <BallTriangle color="#00BFFF" height={80} width={80} />
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
}
