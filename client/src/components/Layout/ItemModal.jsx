import React, { useState } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useHomeContext } from "../../contexts/HomeContext";
import api from "../../services/api";

export default function Modal({ open, setOpen }) {
  const {
    transactions,
    setTransactions,
    currentTransaction,
    setCurrentTransaction,
    historicTransactions,
    setHistoricTransactions,
  } = useHomeContext();

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [actionToConfirm, setActionToConfirm] = useState(null); // 'confirm' or 'cancel'

  const formatDateToYYYYMMDD = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const currentDate = new Date();

  const handleFinalConfirm = async () => {
    if (actionToConfirm === "confirm" && currentTransaction) {
      try {
        const response = await api.post(
          `/transaction/${currentTransaction._id}/history`,
          { amount, description, date: formatDateToYYYYMMDD(currentDate) }
        );

        const updatedTransaction = {
          ...currentTransaction,
          transactionAmount: amount,
          description: description,
        };

        setHistoricTransactions((prevHistoricTransactions) => [
          ...prevHistoricTransactions,
          updatedTransaction,
        ]);

        setTransactions((prevTransactions) =>
          prevTransactions.map((transaction) =>
            transaction._id === currentTransaction._id
              ? response.data
              : transaction
          )
        );

        setCurrentTransaction(null);
        setOpen(false);
      } catch (error) {
        console.error("Error updating transaction:", error);
      }
    } else if (actionToConfirm === "cancel") {
      setCurrentTransaction(null);
      setOpen(false);
    }

    setShowConfirmModal(false);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <div className="flex items-center space-x-2">
              <CurrencyDollarIcon className="h-6 w-6 text-yellow-500" />
              <h3 className="text-lg font-semibold">
                Enter Transaction Amount
              </h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Please enter the amount for the transaction.
            </p>
            <div className="mt-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Montant
              </label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Enter amount"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Enter Description EX: Water, Electricity ..."
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => {
                  setActionToConfirm("cancel");
                  setShowConfirmModal(true);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setActionToConfirm("confirm");
                  setShowConfirmModal(true);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Confirm Transaction
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h3 className="text-lg font-semibold">Are you sure?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Are you sure you want to{" "}
              {actionToConfirm === "confirm" ? "confirm" : "cancel"} this
              transaction?
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                No
              </button>
              <button
                onClick={handleFinalConfirm}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
