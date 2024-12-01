import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          {page}
        </button>
      ))}
      <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
    </div>
  );
};

export default Pagination;
