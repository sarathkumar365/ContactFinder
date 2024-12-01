import React from 'react';

const ContactCard = ({ contact, setIsEditing, setIsDeleting }) => {
  // Combine firstName and lastName into one field called 'name'
  const name = `${contact.firstName} ${contact.lastName}`;

  return (
    <div className="border p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
      <div className="space-y-4">
        {/* Displaying contact information */}
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Date of Birth:</strong> {contact.dob}</p>
        <p><strong>Address:</strong> {contact.street}</p>
        <p><strong>City:</strong> {contact.city}</p>
        <p><strong>State:</strong> {contact.state}</p>
        <p><strong>Zip Code:</strong> {contact.zip}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
      </div>

      {/* Buttons to edit or delete contact */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setIsEditing(true)} // Open the editing form
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => setIsDeleting(true)} // Open the delete confirmation modal
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
