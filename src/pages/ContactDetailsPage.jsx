import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import contactsData from '../assets/contacts.json';
import EditContactForm from '../components/EditContactForm';
import ContactCard from '../components/ContactCard';

const ContactDetailsPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(
    contactsData.find(contact => contact.email === id) // Find contact by unique identifier
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // Define the `setIsDeleting` state

  const handleDelete = () => {
    // Handle contact deletion logic (e.g., remove from local data)
    console.log(`Deleted contact: ${contact.firstName} ${contact.lastName}`);
    setIsDeleting(false); // Close delete modal
  };

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Details</h1>
      {isEditing ? (
        <EditContactForm
          contact={contact}
          setContact={setContact}
          setIsEditing={setIsEditing}
        />
      ) : (
        <ContactCard
          contact={contact}
          setIsEditing={setIsEditing}
          setIsDeleting={setIsDeleting} // Pass `setIsDeleting` to ContactCard
        />
      )}

      {/* Conditional rendering for delete modal */}
      {isDeleting && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="mb-4">Are you sure you want to delete this contact?</p>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => setIsDeleting(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetailsPage;
