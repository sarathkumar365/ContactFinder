import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate(); // To navigate to the Contact Details Page
  const [contacts, setContacts] = useState(getContactsFromLocalStorage());
  const [filteredContacts, setFilteredContacts] = useState(contacts); // Filtered contacts for display
  const [selectedContact, setSelectedContact] = useState(null); // Track the selected contact
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [contactsPerPage] = useState(5); // Number of contacts per page

  useEffect(() => {
    // Whenever contacts are updated, save them to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Pagination Logic: Calculate the index of the first and last contact on the current page
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

  // Handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle edit or delete action
  const handleEditDeleteClick = () => {
    if (selectedContact) {
      navigate(`/contact/${selectedContact.email}`); // Navigate to the edit page with the selected contact's email
    }
  };

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
                selectedContact={selectedContact} // Pass selectedContact
              />
              <ContactTable
                contacts={currentContacts} // Only pass the current contacts for the current page
                setSelectedContact={setSelectedContact} // Pass setSelectedContact
              />
              {filteredContacts.length > 5 && (
                <Pagination
                  totalContacts={filteredContacts.length}
                  contactsPerPage={contactsPerPage}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              )}

              {/* Edit/Delete button */}
              {selectedContact && (
                <button
                  onClick={handleEditDeleteClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                >
                  Edit/Delete Selected Contact
                </button>
              )}
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
