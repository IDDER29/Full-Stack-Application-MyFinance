import React from "react";

const DeleteTransactionModal = ({ onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
        <p>Are you sure you want to delete this transaction?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTransactionModal;
