import React, { Component } from "react";
import { Container } from "./App.styles";
import Title from "../Title/Title";

export default class App extends Component {
  state = {
    name: "",
    contacts: []
}

  render() {
    return (
      <Container>
        <Title title = {"Phonebook"}></Title>
        <Title title = {"Contacts"}></Title>
      </Container>
    )
  }
}

