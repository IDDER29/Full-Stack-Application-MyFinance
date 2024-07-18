import React from "react";

import TransactionItems from "./TransactionsItems";
import Example from "./NewCategoryItem";
const Transactions = ({ open, setOpen }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      {/* Repeat for each transaction */}
      <TransactionItems open={open} setOpen={setOpen} />
      <Example />
    </div>
  );
};

export default Transactions;
