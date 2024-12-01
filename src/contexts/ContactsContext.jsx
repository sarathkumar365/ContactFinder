import React, { createContext, useState, useEffect } from 'react';
import contactsData from '../assets/contacts.json';  // Static data fallback

// Load contacts from localStorage or fallback to static data
const getContactsFromLocalStorage = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : contactsData;
};

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(getContactsFromLocalStorage);  // Initial state from localStorage

  // Whenever contacts change, save to localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};
