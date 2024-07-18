import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaEllipsisV,
  FaBolt,
  FaShoppingCart,
  FaHome,
  FaCar,
} from "react-icons/fa";

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

const TransactionItem = ({ transaction, onEdit, onDelete }) => {
  const { category, lastUpdate, monton } = transaction;
  const bgColorClass = bgColorClassMap[category];
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between items-center mb-4 relative">
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
      <div className="flex flex-col items-end">
        <div className="relative">
          <FaEllipsisV className="cursor-pointer" onClick={handleMenuToggle} />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg menu-container">
              <div
                className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onEdit(transaction);
                  setShowMenu(false);
                }}
              >
                Edit
              </div>
              <div
                className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onDelete(transaction);
                  setShowMenu(false);
                }}
              >
                Delete
              </div>
            </div>
          )}
        </div>
        <h2>{monton} Dhs</h2>
      </div>
    </div>
  );
};

export default TransactionItem;
