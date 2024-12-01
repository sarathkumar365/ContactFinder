import React, { useState } from 'react';

const SearchForm = ({ setFilteredContacts, contacts }) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    const filtered = contacts.filter((contact) => {
      const {
        firstName,
        lastName,
        email,
        street,
        city,
        state,
        zip
      } = formData;
      return (
        // Search in firstName, lastName, and email
        (firstName && contact.firstName.toLowerCase().includes(firstName.toLowerCase())) ||
        (lastName && contact.lastName.toLowerCase().includes(lastName.toLowerCase())) ||
        (email && contact.email.toLowerCase().includes(email.toLowerCase())) ||
        // Search in address fields
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
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
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
