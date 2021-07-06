import React from "react";
import PropTypes from "prop-types";
import { GoPrimitiveDot } from "react-icons/go";
import {AiOutlineUserDelete} from "react-icons/ai"
import { ContactListContainer, ContactListItem, Button} from "./ContactList.styled";

function ContactList({contacts, onDeleteContact}) {
    return (
        <ContactListContainer>
            {contacts.map(({id, name, number}) => (
                <ContactListItem key={id}>
                    <GoPrimitiveDot/>
                    {name}: {number}
                    <Button onClick={() => onDeleteContact(id)}>
                        <AiOutlineUserDelete />
                        Delete</Button>
                </ContactListItem>
            ))}
        </ContactListContainer>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })),
    onDeleteContact: PropTypes.func,
}

export default ContactList;
