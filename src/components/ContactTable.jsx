import React from 'react';
import { Link } from 'react-router-dom';

const ContactTable = ({ contacts }) => {
  // Validation: Check if contacts is undefined or empty
  if (!contacts || contacts.length === 0) {
    return <div>No contacts available.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            if (!contact.email || !contact.firstName || !contact.lastName) {
              return null; // Skip invalid contacts
            }

            return (
              <tr key={contact.email}> {/* Use email as the key */}
                <td className="px-4 py-2">
                  <Link to={`/contact/${contact.email}`} className="text-blue-500 hover:underline">
                    {contact.firstName}
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <Link to={`/contact/${contact.email}`} className="text-blue-500 hover:underline">
                    {contact.lastName}
                  </Link>
                </td>
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
