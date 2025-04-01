import React from 'react';

function ContactPicker({ contacts, onChange, value, name }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">No Contact Selected</option>
      {contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
}

export default ContactPicker; 