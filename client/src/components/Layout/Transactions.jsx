import React, { useState } from "react";
import TransactionItems from "./TransactionsItems";
import Example from "./NewCategoryItem";
import { useHomeContext } from "../../contexts/HomeContext";

const Transactions = ({ open, setOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { transactions } = useHomeContext();

  const categories = [
    "All",
    ...new Set(transactions.map((transaction) => transaction.category)),
  ];

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.category === selectedCategory
        );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      <div className="flex space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 font-medium ${
              selectedCategory === category ? "text-bold" : "text-gray-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <TransactionItems
        transactions={filteredTransactions}
        open={open}
        setOpen={setOpen}
      />
      <Example />
    </div>
  );
};

export default Transactions;
