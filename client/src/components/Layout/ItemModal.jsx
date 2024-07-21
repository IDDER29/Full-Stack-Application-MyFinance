import React, { useState } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useHomeContext } from "../../contexts/HomeContext";
import { set } from "react-hook-form";

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
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [actionToConfirm, setActionToConfirm] = useState(null); // 'confirm' or 'cancel'

  // Function to handle the final confirmation
  const handleFinalConfirm = () => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction === currentTransaction) {
        setCurrentTransaction(null);
        setHistoricTransactions([
          ...historicTransactions,
          { ...transaction, transactionAmount: amount },
        ]);
        return {
          ...transaction,
          consumption: transaction.consumption + parseInt(amount),
        };
      }
      return transaction;
    });
    setTransactions(updatedTransactions);

    setOpen(false);
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
