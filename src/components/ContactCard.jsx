import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = ({ contact, setIsEditing, setIsDeleting }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Date of Birth:</strong> {contact.dob}</p>
        <p><strong>Address:</strong> {contact.address}</p>
        <p><strong>City:</strong> {contact.city}</p>
        <p><strong>State:</strong> {contact.state}</p>
        <p><strong>Zip:</strong> {contact.zip}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => setIsDeleting(true)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
