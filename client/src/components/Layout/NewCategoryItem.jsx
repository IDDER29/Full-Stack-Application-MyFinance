import React, { useState } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const defaultIcon = <CurrencyDollarIcon className="h-6 w-6 text-yellow-500" />;

const initialCategories = [
  "Utilitaires",
  "Alimentation",
  "Logement",
  "Transport",
];

export default function Example() {
  const [showNewTransactionModal, setShowNewTransactionModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
  const [actionToConfirm, setActionToConfirm] = useState(null); // 'cancel' or 'add'
  const [categories, setCategories] = useState(initialCategories);
  const [transactions, setTransactions] = useState([
    {
      category: "Utilitaires",
      remaining: 200,
      total: 500,
      title: "Utility Bill",
      image: null,
    },
    {
      category: "Alimentation",
      remaining: 600,
      total: 700,
      title: "Groceries",
      image: null,
    },
    {
      category: "Logement",
      remaining: 450,
      total: 900,
      title: "Rent",
      image: null,
    },
    {
      category: "Transport",
      remaining: 100,
      total: 600,
      title: "Transport",
      image: null,
    },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    category: "",
    budget: "",
    title: "",
    image: "",
  });

  const [newCategory, setNewCategory] = useState("");

  const validateForm = () => {
    return (
      newTransaction.category.trim() !== "" &&
      newTransaction.budget.trim() !== "" &&
      newTransaction.title.trim() !== ""
    );
  };

  const handleConfirmAction = () => {
    if (actionToConfirm === "add") {
      if (!validateForm()) {
        alert("Please fill in all required fields.");
        return;
      }
      setTransactions([...transactions, newTransaction]);
      setShowNewTransactionModal(false);
      alert(`New transaction created: ${JSON.stringify(newTransaction)}`);
    } else if (actionToConfirm === "cancel") {
      setShowNewTransactionModal(false);
    }
    setShowConfirmModal(false);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() === "") {
      alert("Please enter a category name.");
      return;
    }
    setCategories([...categories, newCategory]);
    setNewTransaction({ ...newTransaction, category: newCategory });
    setNewCategory("");
    setShowNewCategoryModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowNewTransactionModal(true)}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        New Item
      </button>

      {showNewTransactionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h3 className="text-lg font-semibold">New Transaction</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setActionToConfirm("add");
                setShowConfirmModal(true);
              }}
            >
              <div className="mt-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={newTransaction.title}
                  onChange={(e) =>
                    setNewTransaction({
                      ...newTransaction,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter title"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={newTransaction.category}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "new") {
                      setShowNewCategoryModal(true);
                    } else {
                      setNewTransaction({ ...newTransaction, category: value });
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                  <option value="new">New Category</option>
                </select>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Budget
                </label>
                <input
                  id="budget"
                  type="number"
                  value={newTransaction.budget}
                  onChange={(e) =>
                    setNewTransaction({
                      ...newTransaction,
                      budget: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter budget"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image URL
                </label>
                <input
                  id="image"
                  type="text"
                  value={newTransaction.image}
                  onChange={(e) =>
                    setNewTransaction({
                      ...newTransaction,
                      image: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Enter image URL"
                />
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActionToConfirm("cancel");
                    setShowConfirmModal(true);
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Add Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h3 className="text-lg font-semibold">Are you sure?</h3>
            <p className="mt-2 text-sm text-gray-600">
              Are you sure you want to{" "}
              {actionToConfirm === "add"
                ? "add this transaction?"
                : "cancel this action?"}
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                No
              </button>
              <button
                onClick={handleConfirmAction}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {showNewCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h3 className="text-lg font-semibold">New Category</h3>
            <div className="mt-4">
              <label
                htmlFor="new-category"
                className="block text-sm font-medium text-gray-700"
              >
                Category Name
              </label>
              <input
                id="new-category"
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Enter category name"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowNewCategoryModal(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
