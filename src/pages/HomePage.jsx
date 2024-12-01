import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import ContactTable from '../components/ContactTable';
import Pagination from '../components/Pagination';
import ContactDetailsPage from './ContactDetailsPage';

// Get contacts from localStorage (or fallback to contacts.json)
const getContactsFromLocalStorage = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : []; // Fallback to empty array if no data is in localStorage
};

const HomePage = () => {
  // Load contacts from localStorage initially
  const [contacts, setContacts] = useState(getContactsFromLocalStorage());
  const [filteredContacts, setFilteredContacts] = useState(contacts); // Filtered contacts for display

  useEffect(() => {
    // Whenever contacts are updated, save them to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); // Updates to contacts will be saved to localStorage

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <h1 className="text-2xl font-bold mb-4">Choose a Contact</h1>
              <SearchForm
                contacts={contacts}
                setFilteredContacts={setFilteredContacts}
              />
              <ContactTable contacts={filteredContacts} />
              {filteredContacts.length > 5 && <Pagination />}
            </>
          }
        />
        {/* Contact Details Page Route */}
        <Route
          path="/contact/:id"
          element={
            <ContactDetailsPage
              contacts={contacts} // Pass contacts to the ContactDetailsPage
              setContacts={setContacts} // Pass setContacts to update contacts
            />
          }
        />
      </Routes>
    </div>
  );
};

export default HomePage;
