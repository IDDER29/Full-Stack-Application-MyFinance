import React from "react";
import { useHomeContext } from "../../contexts/HomeContext";
import { useDashboardContext } from "../../contexts/DashboardContext";

const MonthChart = () => {
  const { profile, transactions } = useHomeContext();
  const { costs } = useDashboardContext();

  const soldeRestant = profile.currentTotalIncome - costs;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Total Reçu</h2>
      <div className="text-2xl font-bold">{profile.currentTotalIncome}</div>
      <div className="text-gray-700 mt-2">Solde Restant: ${soldeRestant}</div>
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: "65%" }}
          ></div>
        </div>
        <div className="text-sm text-gray-500 mt-2">65% Used</div>
      </div>
    </div>
  );
};

export default MonthChart;
