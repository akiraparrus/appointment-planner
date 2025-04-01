import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './containers/contactsPage/ContactsPage';
import AppointmentsPage from './containers/appointmentsPage/AppointmentsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    setContacts(prevContacts => [...prevContacts, { name, phone, email }]);
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments(prevAppointments => [...prevAppointments, { name, contact, date, time }]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <ContactsPage 
                contacts={contacts} 
                addContact={addContact} 
              />
            } 
          />
          <Route 
            path="/appointments" 
            element={
              <AppointmentsPage 
                appointments={appointments} 
                contacts={contacts} 
                addAppointment={addAppointment} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 