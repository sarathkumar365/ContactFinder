import React, { useState, useEffect } from 'react';

const EditContactForm = ({ contact, setContact, setIsEditing, onSave }) => {
  const [formData, setFormData] = useState(contact);

  useEffect(() => {
    setFormData({ ...contact });
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Save the updated contact
    setIsEditing(false); // Exit editing mode
  };

  const handleCancel = () => {
    setIsEditing(false); // Cancel and revert changes
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white border rounded shadow">
      <div>
        <label className="block text-gray-700">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled
          className="w-full px-4 py-2 border rounded bg-gray-200"
        />
      </div>
      <div>
        <label className="block text-gray-700">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditContactForm;
