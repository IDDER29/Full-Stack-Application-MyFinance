import React from "react";
import ExpenditureChart from "./ExpenditureChart";

// Sample data for the expense chart
const expenseData = [
  { category: "Utilitaires", amount: 500, color: "bg-red-500" },
  { category: "Alimentation", amount: 250, color: "bg-blue-500" },
  { category: "Logement", amount: 250, color: "bg-green-500" },
  { category: "Autres", amount: 300, color: "bg-yellow-500" },
  { category: "Economiser", amount: 250, color: "bg-purple-500" },
];

const ExpenditureCard = () => {
  const totalAmount = expenseData.reduce((acc, curr) => acc + curr.amount, 0);
  const goalAmount = 5000;
  const consumedAmount = totalAmount;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-center">
        Mes dépenses pour juillet
      </h3>
      <p className="text-center text-gray-500 mb-4">
        Super, Votre Budget est en bonne voie
      </p>
      <div className="flex flex-col items-center">
        <ExpenditureChart data={expenseData} />
        <div className="text-2xl font-bold mt-4">{`Consommé: $${consumedAmount}`}</div>
        <div className="text-center text-gray-500 mb-4">{`Sur: $${goalAmount}`}</div>
      </div>
    </div>
  );
};

export default ExpenditureCard;
