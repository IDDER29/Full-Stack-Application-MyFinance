import React from "react";
import { FaBolt, FaShoppingCart, FaHome, FaCar } from "react-icons/fa";

// Define a mapping between categories and icons
const iconMap = {
  Utilitaires: <FaBolt size={24} color="white" />,
  Alimentation: <FaShoppingCart size={24} color="white" />,
  Logement: <FaHome size={24} color="white" />,
  Transport: <FaCar size={24} color="white" />,
};

// Define a mapping between categories and colors
const bgColorClassMap = {
  Utilitaires: "bg-yellow-500",
  Alimentation: "bg-blue-500",
  Logement: "bg-green-500",
  Transport: "bg-red-500",
};

// Sample transaction data
const transactions = [
  { category: "Utilitaires", remaining: 200, total: 500 },
  { category: "Alimentation", remaining: 600, total: 700 },
  { category: "Logement", remaining: 450, total: 900 },
  { category: "Transport", remaining: 100, total: 600 },
];

const TransactionItem = ({ transaction }) => {
  const { category, remaining, total } = transaction;
  const bgColorClass = bgColorClassMap[category];

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <div className={`p-2 rounded-lg mr-4 ${bgColorClass}`}>
          {iconMap[category]}
        </div>
        <div>
          <div>{category}</div>
          <div className="text-sm text-gray-500">la date de modif</div>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-500">
          Il reste {remaining} MAD sur {total}
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Ajouter
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
