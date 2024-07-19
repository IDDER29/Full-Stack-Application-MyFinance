import NavbarA from "../components/Layout/NavA";
import SearchBar from "../components/Layout/SearchBar";
import ExpenditureCard from "../components/Dashboard/Charts/ExpenditureCard";
import IncomeSourcesCard from "../components/Dashboard/Charts/IncomeSourcesCard";
import EarningsCostsCard from "../components/Dashboard/Charts/EarningsCostsCard";
import IncomeProgressCard from "../components/Dashboard/Charts/IncomeProgressCard";
import FinancialOverviewCard from "../components/Dashboard/Charts/FinancialOverviewCard";
import { DashboardContext } from "../contexts/DashboardContext";

const Dashboard = () => {
  const currentIncome = 5500; // Example data
  const goalIncome = 10000; // Example data
  const totalCosts = 3000; // Example data
  const totalIncome = 5500; // Example data
  const remainingAmount = totalIncome - totalCosts; // Example calculation

  return (
    <div className="min-h-screen bg-gray-100 flex p-4">
      <DashboardContext.Provider
        value={{
          currentIncome: currentIncome,
          goalIncome: goalIncome,
          costs: totalCosts,
          income: totalIncome,
          remaining: remainingAmount,
        }}
      >
        {/* Sidebar */}
        <NavbarA />

        {/* Main Content */}
        <div className="w-full flex flex-col p-4 gap-4 ">
          {/* Top Bar with Search */}
          <SearchBar />

          <div>
            {/* Financial Overview Section - First Row */}
            <div className="mb-4">
              <FinancialOverviewCard />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <ExpenditureCard />
              <IncomeSourcesCard />
            </div>

            {/* Third Row */}
            <div className="mb-4">
              <IncomeProgressCard />
            </div>

            {/* Fourth Row */}
            <div className="mb-4">
              <EarningsCostsCard />
            </div>
          </div>
        </div>
      </DashboardContext.Provider>
    </div>
  );
};

export default Dashboard;
