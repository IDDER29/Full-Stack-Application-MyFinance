// components/Dashboard/Charts/EarningsCostsCard.js

import React, { useState } from "react";
import EarningsCostsChart from "./EarningsCostsChart";

const EarningsCostsCard = () => {
  const [showEarnings, setShowEarnings] = useState(true);
  const [showCosts, setShowCosts] = useState(true);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4 w-full">
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-xl font-bold mb-2 flex-1">
          Earnings and Costs for the Last 6 Months
        </h3>
        <div className="flex-1 flex justify-end gap-2">
          <button
            className={`px-4 py-2 rounded-md ${
              showEarnings ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setShowEarnings(!showEarnings)}
          >
            Toggle Earnings
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              showCosts ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setShowCosts(!showCosts)}
          >
            Toggle Costs
          </button>
        </div>
      </div>
      <EarningsCostsChart showEarnings={showEarnings} showCosts={showCosts} />
    </div>
  );
};

export default EarningsCostsCard;
