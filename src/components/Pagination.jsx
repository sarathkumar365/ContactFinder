import React from 'react';

const Pagination = ({ totalContacts, contactsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate page numbers based on total contacts and contacts per page
  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {/* "Previous" Button */}
      <button
        onClick={() => paginate(currentPage - 1)}
        className="px-3 py-1 border rounded hover:bg-gray-100"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      {/* Page Number Buttons */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-3 py-1 border rounded hover:bg-gray-100 ${currentPage === number ? 'bg-blue-500 text-white' : ''}`}
        >
          {number}
        </button>
      ))}
      
      {/* "Next" Button */}
      <button
        onClick={() => paginate(currentPage + 1)}
        className="px-3 py-1 border rounded hover:bg-gray-100"
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
