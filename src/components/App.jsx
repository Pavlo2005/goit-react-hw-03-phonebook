import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('saved-contacts', JSON.stringify(this.state.contacts));
    }
  }

  //  ++
  addPhone = newPhone => {
    if (this.state.contacts.find(contact => contact.name === newPhone.name))
      alert(`${newPhone.name} is Olredy in contacts`)
    else
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...newPhone, id: nanoid() }],
      }));
  };

  deletePhone = PhoneId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== PhoneId),
    }));
  };

  changeFilter = (value) => {
    this.setState(() => ({
      filter: value,
    }));
  };

  currentContacts = () => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    return newContacts;
  }

  render() {
    const contacts = this.currentContacts();

    const { filter } = this.state;

    return (
      <div>
        <PhoneForm onAddPhone={this.addPhone} />
        <Contacts contacts={contacts} onDelete={this.deletePhone} filter={filter} onChange={this.changeFilter}></Contacts>
      </div>
    );
  }
}
