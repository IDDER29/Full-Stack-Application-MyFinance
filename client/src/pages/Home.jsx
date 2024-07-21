import { useState } from "react";
import NavbarA from "../components/Layout/NavA";
import SearchBar from "../components/Layout/SearchBar";
import Card from "../components/Layout/card";
import Transactions from "../components/Layout/Transactions";
import MonthChart from "../components/Layout/TotalRecu";
import TransitionHistorique from "../components/Layout/TransitionHistorique";
import Modal from "../components/Layout/ItemModal";
import { HomeProvider } from "../contexts/HomeContext";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex p-4">
      <HomeProvider>
        {/* Sidebar */}
        <NavbarA />

        {/* Main Content */}
        <div className="w-full flex flex-col p-4">
          {/* Top Bar with Search */}
          <SearchBar />

          <div className="w-full pt-6 grid grid-cols-3 gap-4">
            {/* Card and Transactions */}
            <div className="col-span-2 flex flex-col">
              {/* Card */}
              <Card />
              {/* Transactions */}
              <Transactions open={open} setOpen={setOpen} />
            </div>

            {/* Summary */}
            <div className="flex flex-col">
              <MonthChart />
              <TransitionHistorique />
            </div>
          </div>
        </div>

        <Modal open={open} setOpen={setOpen} />
      </HomeProvider>
    </div>
  );
};

export default HomePage;
