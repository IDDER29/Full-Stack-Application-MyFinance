import React from "react";
import { FaBolt, FaShoppingCart, FaHome, FaCar } from "react-icons/fa";

// Define a mapping between categories and icons
const iconMap = {
  Utilitaires: <FaBolt size={24} />,
  Alimentation: <FaShoppingCart size={24} />,
  Logement: <FaHome size={24} />,
  Transport: <FaCar size={24} />,
};

// Sample transaction data
const transactions = [
  { category: "Utilitaires", remaining: 200, total: 500 },
  { category: "Alimentation", remaining: 600, total: 700 },
  { category: "Logement", remaining: 450, total: 900 },
  { category: "Transport", remaining: 100, total: 600 },
];

const getColor = (category) => {
  switch (category) {
    case "Utilitaires":
      return "yellow";
    case "Alimentation":
      return "blue";
    case "Logement":
      return "green";
    case "Transport":
      return "red";
    default:
      return "gray";
  }
};

const TransactionItem = ({ transaction }) => {
  const { category, remaining, total } = transaction;
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <div className={`bg-${getColor(category)}-300 p-2 rounded-lg mr-4`}>
          {iconMap[category]}
        </div>
        <div>
          <div>{category}</div>
          <div className="text-sm text-gray-500">
            Il reste {remaining} MAD sur {total}
          </div>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Edit
      </button>
    </div>
  );
};

const TransactionItems = () => {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionItems;
