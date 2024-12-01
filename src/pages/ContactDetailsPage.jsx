import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory
import ContactCard from '../components/ContactCard';
import EditContactForm from '../components/EditContactForm';
import DeleteContactModal from '../components/DeleteContactModal';

const ContactDetailsPage = () => {
  const { id } = useParams(); // Get the contact ID from the URL
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [contact, setContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Fetch the contact details based on ID
    const fetchContact = async () => {
      const response = await fetch(`/api/contacts/${id}`);
      const data = await response.json();
      setContact(data);
    };
    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
    navigate('/'); // Navigate back to home after deletion
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Details</h1>
      {isEditing ? (
        <EditContactForm contact={contact} setContact={setContact} setIsEditing={setIsEditing} />
      ) : (
        <ContactCard contact={contact} setIsEditing={setIsEditing} setIsDeleting={setIsDeleting} />
      )}

      {/* Show delete modal if requested */}
      {isDeleting && (
        <DeleteContactModal onDelete={handleDelete} onCancel={() => setIsDeleting(false)} />
      )}
    </div>
  );
};

export default ContactDetailsPage;
