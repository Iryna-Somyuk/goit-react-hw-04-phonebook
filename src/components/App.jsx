import { Component } from 'react';
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
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    console.log(name, number);
    if (this.state.contacts.find(user => user.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  // addContacts = (name, number) => {
  //   console.log(name, number);
  //   if (this.state.contacts.find(user => user.name === name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, { id: nanoid(), name, number }],
  //   }));
  // };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilterValue = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
    } else {
      this.setState({ contacts: InitialContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Сontainer>
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContacts} />
        </Section>
        <Section title="Contacts">
          <Filter
            filterValue={this.state.filter}
            onChange={this.filterContact}
          />
          <ContactsList
            contacts={this.getFilteredContact()}
            onDelete={this.deleteContact}
          />
        </Section>
      </Сontainer>
    );
  }
}
