import React from "react";
import { FaBolt, FaShoppingCart, FaHome, FaCar } from "react-icons/fa";
import TransactionItems from "./TransactionsItems";

const Transactions = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      {/* Repeat for each transaction */}
      <TransactionItems />
    </div>
  );
};

export default Transactions;
