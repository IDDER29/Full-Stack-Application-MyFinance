import React, { useState } from "react";
import {
  FaBolt,
  FaShoppingCart,
  FaHome,
  FaCar,
  FaCalendarAlt,
} from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { useHomeContext } from "../../contexts/HomeContext";

const TransactionItem = ({ transaction, open, setOpen }) => {
  const {
    iconMap,
    bgColorClassMap,
    currentTransaction,
    setCurrentTransaction,
  } = useHomeContext();
  const { category, budget, consumption, lastUpdate, title } = transaction;
  const bgColorClass = bgColorClassMap[category];
  const remaining = budget - consumption;
  const filledAmount = budget - remaining;
  const fillPercentage = (filledAmount / budget) * 100;

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <div
          className={`p-2 rounded-lg mr-4 ${
            bgColorClass ? bgColorClass : "bg-neutral-800"
          }`}
        >
          {iconMap[category] ? iconMap[category] : iconMap["no"]}
        </div>
        <div>
          <div>{title}</div>
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="mr-1" /> {lastUpdate}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <FaSackDollar size={27} />
        </div>
        <div>
          <div className="relative w-48 h-4 bg-gray-300 rounded">
            <div
              className={`absolute top-0 left-0 h-4 ${
                bgColorClass ? bgColorClass : "bg-neutral-800"
              } rounded`}
              style={{ width: `${fillPercentage}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-500">
            Il reste {remaining} MAD sur {budget} MAD
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => {
          setCurrentTransaction(transaction);
          setOpen(true);
        }}
      >
        Ajouter
      </button>
    </div>
  );
};

const TransactionItems = ({ open, setOpen }) => {
  const { transactions } = useHomeContext();
  return (
    <div>
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          transaction={transaction}
          id={index}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};

export default TransactionItems;
