import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
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
  const [profile, setProfile] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const profileData = await fetchProfileData();
        const transactionsData = await fetchTransactionsData();
        setProfile(profileData.profile);
        console.log(
          "Profile data lllllllllllllllllllllllllllllllllll:",
          profileData.profile
        );
        setTransactions(transactionsData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const totalCosts = useMemo(
    () => calculateTotalCosts(transactions, currentMonth, currentYear),
    [transactions]
  );

  const remainingAmount = useMemo(
    () => (profile ? profile.currentTotalIncome - totalCosts : 0),
    [profile, totalCosts]
  );

  const expenseData = useMemo(
    () => (profile ? getExpenseData(transactions, profile) : []),
    [transactions, profile]
  );

  const expenseDataByCategory = useMemo(
    () => transformDataByCategory(transactions),
    [transactions]
  );

  const chartData = useMemo(
    () => (profile ? generateChartData(transactions, profile) : []),
    [transactions, profile]
  );

  const colors = useMemo(
    () => ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
    []
  );

  return (
    <DashboardContext.Provider
      value={{
        goalIncome: profile ? profile.goalAmount : 0,
        costs: totalCosts,
        income: profile ? profile.currentTotalIncome : 0,
        remaining: remainingAmount,
        expenseData,
        totalAmount: profile ? profile.currentTotalIncome : 0,
        goalAmount: profile ? profile.goalAmount : 0,
        expenseDataByCategory,
        sourcesOfIncome: profile ? profile.incomeSources : [],
        chartData,
        colors,
        loading,
        profile,
        setProfile,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
