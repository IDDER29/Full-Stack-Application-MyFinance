import React, { createContext, useContext, useState, useMemo } from "react";
import {
  fetchProfileData,
  fetchTransactionsData,
} from "../services/dataService";
import {
  calculateTotalCosts,
  getExpenseData,
  transformDataByMonth,
} from "../utils/utils";

const DashboardContext = createContext();

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  const profile = useMemo(fetchProfileData, []);
  const [transactions, setTransactions] = useState(fetchTransactionsData());

  const totalCosts = useMemo(
    () => calculateTotalCosts(transactions),
    [transactions]
  );
  const remainingAmount = useMemo(
    () => profile.currentTotalIncome - totalCosts,
    [profile.currentTotalIncome, totalCosts]
  );
  const expenseData = useMemo(
    () => getExpenseData(transactions, profile),
    [transactions, profile]
  );
  const expenseDataByMonth = useMemo(
    () => transformDataByMonth(transactions),
    [transactions]
  );

  const chartData = useMemo(
    () => [
      { month: "January", earnings: 4000, costs: 2400 },
      { month: "February", earnings: 3000, costs: 1398 },
      { month: "March", earnings: 2000, costs: 9800 },
      { month: "April", earnings: 2780, costs: 3908 },
      { month: "May", earnings: 1890, costs: 4800 },
      { month: "June", earnings: 2390, costs: 3800 },
    ],
    []
  );

  const colors = useMemo(
    () => ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
    []
  );

  return (
    <DashboardContext.Provider
      value={{
        goalIncome: profile.goalAmount,
        costs: totalCosts,
        income: profile.currentTotalIncome,
        remaining: remainingAmount,
        expenseData,
        totalAmount: profile.currentTotalIncome,
        goalAmount: profile.goalAmount,
        expenseDataByMonth,
        sourcesOfIncome: profile.incomeSourses,
        chartData,
        colors,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
