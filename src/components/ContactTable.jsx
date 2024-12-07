import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactTable = ({ contacts, setSelectedContact }) => {
  const [popupContact, setPopupContact] = useState(null);

  const handleCheckboxChange = (contact, e) => {
    if (e.target.checked) {
      setPopupContact(contact); // Set contact for the popup
    } else {
      setPopupContact(null); // Reset popup when unchecked
    }
  };

  const closePopup = () => setPopupContact(null);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Select</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">DOB</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Zip</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              const name = `${contact.firstName} ${contact.lastName}`;

              return (
                <tr key={contact.email}>
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      name="selectContact"
                      onChange={(e) => handleCheckboxChange(contact, e)}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Link to={`/contact/${contact.email}`} className="block text-blue-500 hover:underline">
                      {name}
                    </Link>
                  </td>
                  <td className="px-4 py-2">{contact.dob}</td>
                  <td className="px-4 py-2">{contact.street}</td>
                  <td className="px-4 py-2">{contact.city}</td>
                  <td className="px-4 py-2">{contact.state}</td>
                  <td className="px-4 py-2">{contact.zip}</td>
                  <td className="px-4 py-2">{contact.email}</td>
                  <td className="px-4 py-2">{contact.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {popupContact && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <p><strong>Name:</strong> {popupContact.firstName} {popupContact.lastName}</p>
            <p><strong>Email:</strong> {popupContact.email}</p>
            <p><strong>Phone:</strong> {popupContact.phone}</p>
            <p><strong>DOB:</strong> {popupContact.dob}</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTable;
