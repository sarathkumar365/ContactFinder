import React, { useState, useEffect } from 'react';

const SearchForm = ({ setFilteredContacts, contacts, selectedContact }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  // Whenever the selected contact changes, update the form data
  useEffect(() => {
    if (selectedContact) {
      setFormData({
        firstName: selectedContact.firstName || '',
        lastName: selectedContact.lastName || '',
        dob: selectedContact.dob || '',
        email: selectedContact.email || '',
        phone: selectedContact.phone || '',
        street: selectedContact.street || '',
        city: selectedContact.city || '',
        state: selectedContact.state || '',
        zip: selectedContact.zip || '',
      });
    } else {
      // Reset the form if no contact is selected
      setFormData({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        zip: '',
      });
    }
  }, [selectedContact]); // Update form data whenever selected contact changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    const filtered = contacts.filter((contact) => {
      const { firstName, lastName, email, street, city, state, zip } = formData;
      return (
        (firstName && contact.firstName.toLowerCase().includes(firstName.toLowerCase())) ||
        (lastName && contact.lastName.toLowerCase().includes(lastName.toLowerCase())) ||
        (email && contact.email.toLowerCase().includes(email.toLowerCase())) ||
        (street && contact.street.toLowerCase().includes(street.toLowerCase())) ||
        (city && contact.city.toLowerCase().includes(city.toLowerCase())) ||
        (state && contact.state.toLowerCase().includes(state.toLowerCase())) ||
        (zip && contact.zip.toLowerCase().includes(zip.toLowerCase()))
      );
    });

    setFilteredContacts(filtered); // Set the filtered contacts in the parent component
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {['firstName', 'lastName', 'dob', 'email', 'phone', 'street', 'city', 'state', 'zip'].map((field) => (
        <input
        key={field}
        type={field === 'dob' ? 'date' : 'text'}
        name={field}
        placeholder={field.replace(/([A-Z])/g, ' $1').toLowerCase()} // Convert camelCase to space-separated lowercase
        className="border border-gray-300 rounded-md p-2"
        value={formData[field]}
        onChange={handleInputChange}
      />
      ))}
      <button
        onClick={handleSearch}
        className="col-span-full md:col-span-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
