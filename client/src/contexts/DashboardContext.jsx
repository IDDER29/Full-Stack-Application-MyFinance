import React, { createContext, useContext, useState, useMemo } from "react";
import {
  fetchProfileData,
  fetchTransactionsData,
} from "../services/dataService";
import {
  calculateTotalCosts,
  getExpenseData,
  transformDataByCategory,
  generateChartData,
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

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() is zero-based, so add 1
  const currentYear = currentDate.getFullYear();
  const totalCosts = useMemo(
    () => calculateTotalCosts(transactions, currentMonth, currentYear),
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
  const expenseDataByCategory = useMemo(
    () => transformDataByCategory(transactions),
    [transactions]
  );
  const chartData = useMemo(
    () => generateChartData(transactions, profile),
    [transactions, profile]
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
        expenseDataByCategory,
        sourcesOfIncome: profile.incomeSourses,
        chartData,
        colors,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
