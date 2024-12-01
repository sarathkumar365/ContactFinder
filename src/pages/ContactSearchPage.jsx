import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import ContactTable from '../components/ContactTable';
import Pagination from '../components/Pagination';

const ContactSearchPage = () => {
  const [filteredContacts, setFilteredContacts] = useState([]); // Placeholder for search results

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Choose a Contact</h1>
      <SearchForm setFilteredContacts={setFilteredContacts} />
      
      {/* Conditionally render Pagination if there are more than 25 contacts */}
      {filteredContacts.length > 25 && (<Pagination /> && <ContactTable contacts={filteredContacts} />)}
    </div>
  );
};

export default ContactSearchPage;
