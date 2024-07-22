import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaEllipsisV,
  FaBolt,
  FaShoppingCart,
  FaHome,
  FaCar,
} from "react-icons/fa";
import { useHomeContext } from "../../contexts/HomeContext";

const TransactionItem = ({ transaction, onEdit, onDelete }) => {
  const { transactions, iconMap, bgColorClassMap } = useHomeContext();
  const { category, amount, lastUpdate, description: title } = transaction;

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
          <div>{title}</div>
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
        <h2>{amount} Dhs</h2>
      </div>
    </div>
  );
};

export default TransactionItem;
