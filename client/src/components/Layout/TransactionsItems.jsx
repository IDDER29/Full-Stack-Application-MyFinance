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

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
const TransactionItem = ({ transaction, open, setOpen }) => {
  const {
    iconMap,
    bgColorClassMap,
    currentTransaction,
    setCurrentTransaction,
  } = useHomeContext();
  const { title, category, budget, lastUpdate } = transaction;
  const lastUpdatedDate = formatDate(lastUpdate);
  const consumption = transaction.transactionsHistorique.reduce(
    (acc, { amount }) => acc + amount,
    0
  );
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
            <FaCalendarAlt className="mr-1" /> {lastUpdatedDate}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <FaSackDollar size={27} />
        </div>
        <div>
          <div className="relative w-48 h-4 bg-gray-300 rounded overflow-hidden">
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

const TransactionItems = ({ transactions, open, setOpen }) => {
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
