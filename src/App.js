import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactsPage from './containers/contactsPage/ContactsPage';
import AppointmentsPage from './containers/appointmentsPage/AppointmentsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addContact = (name, phone, email) => {
    setContacts(prevContacts => [...prevContacts, { name, phone, email }]);
  };

  const addAppointment = (name, contact, date, time) => {
    setAppointments(prevAppointments => [...prevAppointments, { name, contact, date, time }]);
  };

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Appointment Planner</h1>
          <nav>
            <Link to="/">Contacts</Link>
            <Link to="/appointments">Appointments</Link>
          </nav>
        </header>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
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