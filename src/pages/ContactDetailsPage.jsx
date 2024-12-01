import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactsContext } from '../contexts/ContactsContext';
import ContactCard from '../components/ContactCard';
import EditContactForm from '../components/EditContactForm';
import DeleteContactModal from '../components/DeleteContactModal';

const ContactDetailsPage = () => {
  const { contacts, setContacts } = useContext(ContactsContext); // Get contacts from context
  const { id } = useParams(); // Get the contact ID from the URL
  const [contact, setContact] = useState(null); // Local state for the current contact
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
  const [isDeleting, setIsDeleting] = useState(false); // State to handle delete confirmation
  const navigate = useNavigate(); // Used to navigate back after deletion

  useEffect(() => {
    if (contacts) {
      const foundContact = contacts.find((c) => c.email === id);
      setContact(foundContact || null);
    }
  }, [contacts, id]);

  const handleSave = (updatedContact) => {
    const updatedContacts = contacts.map((c) =>
      c.email === updatedContact.email ? updatedContact : c
    );
    setContacts(updatedContacts); // Update the contacts state in context
  };

  // Handle the delete action
  const handleDelete = () => {
    const updatedContacts = contacts.filter((c) => c.email !== contact.email);
    setContacts(updatedContacts); // Remove the contact from the contacts state
    localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Save to localStorage
    navigate('/'); // Navigate back to the homepage after deletion
  };

  const handleCancelDelete = () => {
    setIsDeleting(false); // Cancel the delete action and close the confirmation
  };

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Details</h1>

      {/* Render the EditContactForm if editing, otherwise render the ContactCard */}
      {isEditing ? (
        <EditContactForm
          contact={contact}
          setContact={setContact}
          setIsEditing={setIsEditing}
          onSave={handleSave}
        />
      ) : (
        <ContactCard
          contact={contact}
          setIsEditing={setIsEditing} // Pass down setIsEditing to trigger edit mode
          setIsDeleting={setIsDeleting} // Pass down setIsDeleting to trigger delete confirmation
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleting && (
        <DeleteContactModal
          onDelete={handleDelete} // Pass the delete function
          onCancel={handleCancelDelete} // Pass the cancel function
        />
      )}
    </div>
  );
};

export default ContactDetailsPage;
