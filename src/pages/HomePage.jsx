import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import ContactTable from '../components/ContactTable';
import Pagination from '../components/Pagination';
import contactsData from '../assets/contacts.json'; // Import the contacts JSON

const HomePage = () => {
  const [filteredContacts, setFilteredContacts] = useState([]); // Store filtered contacts

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Choose a Contact</h1>
      <SearchForm setFilteredContacts={setFilteredContacts} contacts={contactsData} />
      <ContactTable contacts={filteredContacts} />
      
      {/* Show pagination only if there are more than 25 contacts */}
      {filteredContacts.length > 25 && <Pagination />}
    </div>
  );
};

export default HomePage;
