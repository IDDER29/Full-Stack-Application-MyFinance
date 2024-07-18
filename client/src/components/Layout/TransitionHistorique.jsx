import React from "react";

const TransitionHistorique = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
      <h2 className="text-xl font-bold mb-4">Historique des transition</h2>
      <div>
        {/* Repeat for each history item */}
        <div className="flex justify-between items-center mb-4">
          <div>Alimentation</div>
          <div className="text-gray-500">100 dhs</div>
        </div>
        {/* Add more history items similarly */}
      </div>
    </div>
  );
};

export default TransitionHistorique;
