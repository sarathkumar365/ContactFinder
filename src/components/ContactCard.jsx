import React from 'react';

const ContactCard = ({ contact, setIsEditing, setIsDeleting }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <p><strong>Name:</strong> {contact.firstName} {contact.lastName}</p>
        <p><strong>Date of Birth:</strong> {contact.dob}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Street:</strong> {contact.street}</p>
        <p><strong>City:</strong> {contact.city}</p>
        <p><strong>State:</strong> {contact.state}</p>
        <p><strong>Zip:</strong> {contact.zip}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setIsEditing(true)} // Open the editing form
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => setIsDeleting(true)} // Open the delete confirmation modal
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
