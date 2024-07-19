import { createContext, useContext } from "react";

export const DashboardContext = createContext();

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
}

export function DashboardProvider({ children }) {
  const currentIncome = 5500; // Example data
  const goalIncome = 10000; // Example data
  const totalCosts = 3000; // Example data
  const totalIncome = 5500; // Example data
  const remainingAmount = totalIncome - totalCosts; // Example calculation

  // Sample data for the expense chart

  const expenseData = [
    { category: "Utilitaires", amount: 500, color: "bg-red-500" },
    { category: "Alimentation", amount: 250, color: "bg-blue-500" },
    { category: "Logement", amount: 250, color: "bg-green-500" },
    { category: "Autres", amount: 300, color: "bg-yellow-500" },
    { category: "Economiser", amount: 250, color: "bg-purple-500" },
  ];

  /// Sample data for the income chart

  const totalAmount = expenseData.reduce((acc, curr) => acc + curr.amount, 0);
  const goalAmount = 5000;
  const consumedAmount = totalAmount;

  // expenseData by monts

  const expenseDataM = [
    {
      month: "January",
      Utilitaires: 400,
      Alimentation: 300,
      Logement: 300,
      Autres: 200,
      Economiser: 100,
    },
    {
      month: "February",
      Utilitaires: 500,
      Alimentation: 400,
      Logement: 300,
      Autres: 200,
      Economiser: 150,
    },

    // Add more data as needed
  ];

  // Sample data for the income chart
  const incomeData = [
    { source: "Salary", amount: 3000 },
    { source: "Freelance", amount: 1500 },
    { source: "Investments", amount: 700 },
    { source: "Other", amount: 300 },
  ];

  // Sample data for the earnings and costs chart
  const chartData = [
    { month: "January", earnings: 4000, costs: 2400 },
    { month: "February", earnings: 3000, costs: 1398 },
    { month: "March", earnings: 2000, costs: 9800 },
    { month: "April", earnings: 2780, costs: 3908 },
    { month: "May", earnings: 1890, costs: 4800 },
    { month: "June", earnings: 2390, costs: 3800 },
  ];

  let colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <DashboardContext.Provider
      value={{
        currentIncome: currentIncome,
        goalIncome: goalIncome,
        costs: totalCosts,
        income: totalIncome,
        remaining: remainingAmount,
        expenseData,
        totalAmount,
        goalAmount,
        consumedAmount,
        expenseDataM,
        incomeData,
        chartData,
        colors,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
