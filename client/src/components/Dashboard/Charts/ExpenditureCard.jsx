import React from "react";
import ExpenditureChart from "./ExpenditureChart";
import { useDashboardContext } from "../../../contexts/DashboardContext";

const ExpenditureCard = () => {
  const { goalAmount, consumedAmount } = useDashboardContext();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-center">
        Mes dépenses pour juillet
      </h3>
      <p className="text-center text-gray-500 mb-4">
        Super, Votre Budget est en bonne voie
      </p>
      <div className="flex flex-col items-center">
        <ExpenditureChart />
        <div className="text-2xl font-bold mt-4">{`Consommé: $${consumedAmount}`}</div>
        <div className="text-center text-gray-500 mb-4">{`Sur: $${goalAmount}`}</div>
      </div>
    </div>
  );
};

export default ExpenditureCard;
