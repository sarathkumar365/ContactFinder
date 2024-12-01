import React from 'react';

const DeleteContactModal = ({ onDelete, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h3 className="text-xl mb-4">Are you sure you want to delete this contact?</h3>
        <div className="flex justify-between">
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Yes, Delete
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContactModal;
