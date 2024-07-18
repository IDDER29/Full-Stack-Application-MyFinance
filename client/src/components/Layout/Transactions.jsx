import React, { useState } from "react";
import TransactionItems from "./TransactionsItems";
import Example from "./NewCategoryItem";

const Transactions = ({ open, setOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Necessaire", "Digital", "Autres"];
  const transactions = [
    {
      category: "Necessaire",
      remaining: 200,
      total: 500,
      lastUpdate: "01/07/2024",
    },
    {
      category: "Digital",
      remaining: 600,
      total: 700,
      lastUpdate: "15/07/2024",
    },
    {
      category: "Necessaire",
      remaining: 450,
      total: 900,
      lastUpdate: "10/07/2024",
    },
    {
      category: "Autres",
      remaining: 100,
      total: 600,
      lastUpdate: "20/07/2024",
    },
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
