import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

export default function ContactList({ contacts }) {
  return (
    <div className="container p-0 contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          fullname={contact.fullname}
          phone_number={contact.phone_number}
        />
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
