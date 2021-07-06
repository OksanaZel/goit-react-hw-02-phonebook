import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "./App.styled";
import Title from "../Title";
import ContactList from "../ContactList";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import initialContacts from "../data/initialContacts.json";

export default class App extends Component {
  state = {
    contacts: initialContacts,
    filter: "",
  }

  addContact = ({ name, number }) => {

    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return
    }

      const contact = {
        id: nanoid(5),
        name,
        number,
      }
    
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));    
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContact();

    return (
      <Container>
        <Title title={"Phonebook"} />
        <ContactForm onSubmit={this.addContact} />
        {/* <form onSubmit={this.handleSubmit}>
          <label>Name
            <input onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              />
            </label>
          
          <label>Number
            <input onChange={this.handleChange}
              type="tel"
              name="number"
              value={number} />
            </label>
          
            <button type="submit">Add contact</button>
        </form> */}
        {/* <label>Find contacts by name
          <input type="text" value={filter} onChange={this.changeFilter}/>
        </label> */}
        <Filter value={filter} onChange={this.changeFilter} />
        <Title title={"Contacts"} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </Container>
    )
  }
}
