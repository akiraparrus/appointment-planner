import React, { useState } from 'react';
import ContactForm from '../../components/contactForm/ContactForm';
import TileList from '../../components/tileList/TileList';

function ContactsPage({ contacts, addContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
      setIsDuplicate(false);
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setIsDuplicate(contacts.some(contact => contact.name === newName));
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={handleNameChange}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
        {isDuplicate && <p className="error">This name is already in use!</p>}
      </section>
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
}

export default ContactsPage; 