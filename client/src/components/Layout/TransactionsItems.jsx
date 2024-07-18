import React from "react";
import { FaBolt, FaShoppingCart, FaHome, FaCar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

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

const TransactionItem = ({ transaction, open, setOpen }) => {
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
      <div className="flex items-center gap-2">
        <div>
          {" "}
          <FaSackDollar size={27} />
        </div>

        <div>
          <div className="relative w-48 h-4 bg-gray-300 rounded">
            <div
              className="absolute top-0 left-0 h-4 bg-blue-500 rounded"
              style={{ width: `${(remaining / total) * 100}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-500">
            Il reste {remaining} MAD sur {total}
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => setOpen(true)}
      >
        Ajouter
      </button>
    </div>
  );
};

const TransactionItems = ({ open, setOpen }) => {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          transaction={transaction}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};

export default TransactionItems;
