import React from "react";
import NavbarA from "../components/Layout/NavA";
import SearchBar from "../components/Layout/SearchBar";
import Card from "../components/Layout/card";
import Transactions from "../components/Layout/Transactions";
import MonthChart from "../components/Layout/TotalRecu";
import TransitionHistorique from "../components/Layout/TransitionHistorique";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <NavbarA />

      {/* Main Content */}
      <div className="w-full flex flex-col">
        {/* Top Bar with Search */}
        <SearchBar />

        <div className="w-full p-6 grid grid-cols-3 gap-4">
          {/* Card and Transactions */}
          <div className="col-span-2 flex flex-col">
            {/* Card */}
            <Card />
            {/* Transactions */}
            <Transactions />
          </div>

          {/* Summary */}
          <div className="flex flex-col">
            <MonthChart />
            <TransitionHistorique />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
