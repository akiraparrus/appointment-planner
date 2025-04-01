import React, { useState, useEffect } from 'react';
import ContactPicker from '../contactPicker/ContactPicker';

function AppointmentForm({ contacts, name, setName, contact, setContact, date, setDate, time, setTime, handleSubmit }) {
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // Generate time slots from 9 AM to 5 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    return slots;
  };

  useEffect(() => {
    setAvailableTimeSlots(generateTimeSlots());
  }, []);

  const handleTimeSlotClick = (slot) => {
    setSelectedTimeSlot(slot);
    setTime(slot);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setDate(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (selectedTimeSlot) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="appointment-form">
      <div className="form-section">
        <h2>Appointment Details</h2>
        <div className="form-group">
          <label htmlFor="name">Appointment Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter appointment name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Select Contact</label>
          <ContactPicker
            contacts={contacts}
            onChange={setContact}
            value={contact}
            name="contact"
          />
        </div>
      </div>

      <div className="form-section">
        <h2>Schedule</h2>
        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={getTodayString()}
            required
          />
        </div>
        <div className="form-group">
          <label>Available Time Slots</label>
          <div className="time-slots-container">
            {availableTimeSlots.map((slot) => (
              <div
                key={slot}
                className={`time-slot ${selectedTimeSlot === slot ? 'selected' : ''}`}
                onClick={() => handleTimeSlotClick(slot)}
              >
                {slot}
              </div>
            ))}
          </div>
          <input
            type="hidden"
            value={time}
            required
          />
        </div>
      </div>

      <button type="submit" className="submit-button">
        Schedule Appointment
      </button>
    </form>
  );
}

export default AppointmentForm; 