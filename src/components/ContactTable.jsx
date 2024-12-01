import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate

const ContactTable = ({ contacts, setSelectedContact }) => {
  if (!contacts || contacts.length === 0) {
    return <div>No contacts available.</div>;
  }

  const handleCheckboxChange = (contact, e) => {
    // If the checkbox is checked, set the selected contact
    if (e.target.checked) {
      setSelectedContact(contact); // Set the contact to be selected
    } else {
      setSelectedContact(null); // Reset selected contact when unchecked
    }
  };

  return (
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
                    onChange={(e) => handleCheckboxChange(contact, e)} // Handle checkbox change
                  />
                </td>
                {/* Wrap the entire row in a Link to make it clickable */}
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
  );
};

export default ContactTable;
