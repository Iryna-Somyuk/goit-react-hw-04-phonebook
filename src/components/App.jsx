import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './SectionTitle/SectionTitle';
import { Сontainer } from './App.styled';

const InitialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getInitialContacts =() => {
  const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts;
    } else {
      return InitialContacts;
    }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  const addContacts = ({ name, number }) => {
    console.log(name, number);
    if (contacts.find(user => user.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  };

  const filterContact = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContact = () => {
    const normalizedFilterValue = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Сontainer>
      <Section title="Phonebook">
        <PhonebookForm onSubmit={addContacts} />
      </Section>
      <Section title="Contacts">
        <Filter filterValue={filter} onChange={filterContact} />
        <ContactsList
          contacts={getFilteredContact()}
          onDelete={deleteContact}
        />
      </Section>
    </Сontainer>
  );
};


