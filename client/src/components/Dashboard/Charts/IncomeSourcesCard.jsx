// components/Dashboard/Charts/IncomeSourcesCard.js

import React from "react";
import IncomeSourcesChart from "./IncomeSourcesChart";

const IncomeSourcesCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-center">Sources de Revenus</h3>
      <IncomeSourcesChart />
    </div>
  );
};

export default IncomeSourcesCard;
