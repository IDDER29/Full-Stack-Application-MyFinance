import React, { useState } from "react";
import {
  FaBolt,
  FaShoppingCart,
  FaHome,
  FaCar,
  FaCalendarAlt,
} from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

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
  {
    category: "Utilitaires",
    remaining: 200,
    total: 500,
    lastUpdate: "01/07/2024",
    monton: 339,
  },
  {
    category: "Logement",
    remaining: 450,
    total: 900,
    lastUpdate: "10/07/2024",
    monton: 500,
  },
  {
    category: "Alimentation",
    remaining: 100,
    total: 700,
    lastUpdate: "15/07/2024",
    monton: 50,
  },
  {
    category: "Logement",
    remaining: 450,
    total: 900,
    lastUpdate: "10/07/2024",
    monton: 1000,
  },
  {
    category: "Transport",
    remaining: 100,
    total: 600,
    lastUpdate: "20/07/2024",
    monton: 239,
  },
  {
    category: "Utilitaires",
    remaining: 200,
    total: 500,
    lastUpdate: "01/07/2024",
    monton: 100,
  },
];

const TransactionItem = ({ transaction }) => {
  const { category, remaining, total, lastUpdate, monton } = transaction;
  const bgColorClass = bgColorClassMap[category];
  const filledAmount = total - remaining;
  const fillPercentage = (filledAmount / total) * 100;

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <div className={`p-2 rounded-lg mr-4 ${bgColorClass}`}>
          {iconMap[category]}
        </div>
        <div>
          <div>{category}</div>
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="mr-1" /> {lastUpdate}
          </div>
        </div>
      </div>

      <h2>{monton}Dhs</h2>
    </div>
  );
};
const TransitionHistorique = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
      <h2 className="text-xl font-bold mb-4">Historique des transition</h2>
      <div>
        {/* Add more history items similarly */}
        <div>
          {transactions.map((transaction, index) => (
            <TransactionItem key={index} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransitionHistorique;
