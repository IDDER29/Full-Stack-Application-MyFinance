import React, { useState } from "react";

const EditTransactionModal = ({ transaction, onSave, onClose }) => {
  const [editedTransaction, setEditedTransaction] = useState(transaction);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction({ ...editedTransaction, [name]: value });
  };

  const handleSubmit = () => {
    onSave(editedTransaction);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Edit Transaction</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={editedTransaction.category}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Monton
          </label>
          <input
            type="number"
            name="monton"
            value={editedTransaction.monton}
            onChange={handleChange}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={handleSubmit}
          >
            Save Changes
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

export default EditTransactionModal;
