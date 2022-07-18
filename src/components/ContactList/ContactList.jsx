import style from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContacts } from '..//../redux/contacts';
import { useEffect } from 'react';
import { getContacts, deleteContact } from '../../redux/operations.js';

export default function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === false) {
      dispatch(getContacts());
    }
  }, [dispatch, isLoading]);

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContacts = e => {
    dispatch(deleteContact(e.target.value));
  };

  return (
    <>
      {filteredContacts().length ? (
        <ul>
          {filteredContacts().map(({ name, id, phone }) => (
            <li key={id}>
              {name}: {phone}
              <button
                type="button"
                value={id}
                onClick={deleteContacts}
                className={style.buttonDelete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>So far no contacts</p>
      )}
    </>
  );
}
