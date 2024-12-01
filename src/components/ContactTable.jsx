import React from 'react';

const ContactTable = ({ contacts }) => {
  console.log(contacts);
  
  return (
    <table className="table-auto w-full border-collapse border border-gray-200 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-200 p-2">Name</th>
          <th className="border border-gray-200 p-2">DOB</th>
          <th className="border border-gray-200 p-2">Address</th>
          <th className="border border-gray-200 p-2">City</th>
          <th className="border border-gray-200 p-2">State</th>
          <th className="border border-gray-200 p-2">Zip</th>
          <th className="border border-gray-200 p-2">Email</th>
          <th className="border border-gray-200 p-2">Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index} className="even:bg-gray-50">
            <td className="border border-gray-200 p-2">{contact.firstName}</td>
            <td className="border border-gray-200 p-2">{contact.dob}</td>
            <td className="border border-gray-200 p-2">{contact.street}</td>
            <td className="border border-gray-200 p-2">{contact.city}</td>
            <td className="border border-gray-200 p-2">{contact.state}</td>
            <td className="border border-gray-200 p-2">{contact.zip}</td>
            <td className="border border-gray-200 p-2">{contact.email}</td>
            <td className="border border-gray-200 p-2">{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
